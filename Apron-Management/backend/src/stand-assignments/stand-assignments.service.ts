import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { FlightPlan } from '../flight-plans/entities/flight-plan.entity';
import { Stand } from '../stands/entities/stand.entity';
import { CreateStandAssignmentDto } from './dto/create-stand-assignment.dto';
import { StandAssignment } from './entities/stand-assignment.entity';

@Injectable()
export class StandAssignmentsService {
  constructor(
    @InjectRepository(StandAssignment)
    private readonly assignmentRepository: Repository<StandAssignment>,

    @InjectRepository(FlightPlan)
    private readonly flightRepository: Repository<FlightPlan>,

    @InjectRepository(Stand)
    private readonly standRepository: Repository<Stand>,
  ) {}

  async findAll(): Promise<StandAssignment[]> {
    return this.assignmentRepository.find({
      order: {
        fromTime: 'ASC',
      },
    });
  }

  async create(
    dto: CreateStandAssignmentDto,
  ): Promise<StandAssignment> {
    const flight = await this.flightRepository.findOne({
      where: {
        id: dto.flightPlanId,
      },
    });

    if (!flight) {
      throw new NotFoundException('Flight not found');
    }

    const stand = await this.standRepository.findOne({
      where: {
        stand: dto.standCode,
      },
    });

    if (!stand) {
      throw new NotFoundException('Stand not found');
    }

    const overlap = await this.assignmentRepository
      .createQueryBuilder('assignment')
      .where('assignment.standCode = :standCode', {
        standCode: dto.standCode,
      })
      .andWhere(
        `
        (
          :fromTime < assignment.toTime
          AND
          :toTime > assignment.fromTime
        )
      `,
        {
          fromTime: dto.fromTime,
          toTime: dto.toTime,
        },
      )
      .getOne();

    if (overlap) {
      throw new BadRequestException(
        'Stand is already occupied during this time.',
      );
    }

    const assignment = this.assignmentRepository.create({
      flightPlan: flight,
      stand,
      flightPlanId: dto.flightPlanId,
      standCode: dto.standCode,
      fromTime: new Date(dto.fromTime),
      toTime: new Date(dto.toTime),
      remarks: dto.remarks,
    });

    return this.assignmentRepository.save(assignment);
  }
}
import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, ILike, Repository } from 'typeorm';

import { FlightPlan } from './entities/flight-plan.entity';
import { CreateFlightPlanDto } from './dto/create-flight-plan.dto';
import { UpdateFlightPlanDto } from './dto/update-flight-plan.dto';

@Injectable()
export class FlightPlansService {
  constructor(
    @InjectRepository(FlightPlan)
    private readonly flightPlanRepository: Repository<FlightPlan>,
  ) {}

  async findAll(query: any): Promise<FlightPlan[]> {
    const {
      search,
      flightPlanType,
      originDateFrom,
      originDateTo,
    } = query;

    const queryBuilder =
      this.flightPlanRepository.createQueryBuilder('flight');

    if (search) {
      queryBuilder.andWhere(
        `(
            flight.calculatedCallsign ILIKE :search
            OR flight.carrier ILIKE :search
            OR flight.flightNumber ILIKE :search
            OR flight.adep ILIKE :search
            OR flight.ades ILIKE :search
        )`,
        {
          search: `%${search}%`,
        },
      );
    }

    if (flightPlanType) {
      queryBuilder.andWhere(
        'flight.flightPlanType = :flightPlanType',
        {
          flightPlanType,
        },
      );
    }

    if (originDateFrom && originDateTo) {
      queryBuilder.andWhere(
        'flight.originDate BETWEEN :from AND :to',
        {
          from: originDateFrom,
          to: originDateTo,
        },
      );
    }

    return queryBuilder
      .orderBy('flight.created', 'DESC')
      .getMany();
  }

  async findOne(id: number): Promise<FlightPlan> {
    const flight = await this.flightPlanRepository.findOne({
      where: {
        id,
      },
    });

    if (!flight) {
      throw new NotFoundException(
        'Flight Plan not found',
      );
    }

    return flight;
  }

  async findLinkedFlights(id: number) {
    const flight = await this.findOne(id);

    if (!flight.linkedFlightId) {
      return [];
    }

    return this.flightPlanRepository.find({
      where: {
        linkedFlightId: flight.linkedFlightId,
      },
    });
  }

  async create(
    dto: CreateFlightPlanDto,
  ): Promise<FlightPlan> {
    const flight =
      this.flightPlanRepository.create(dto);

    return this.flightPlanRepository.save(flight);
  }

  async update(
    id: number,
    dto: UpdateFlightPlanDto,
  ): Promise<FlightPlan> {
    const flight = await this.findOne(id);

    Object.assign(flight, dto);

    return this.flightPlanRepository.save(flight);
  }
}
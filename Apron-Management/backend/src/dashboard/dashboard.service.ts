import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { FlightPlan } from '../flight-plans/entities/flight-plan.entity';
import { Stand } from '../stands/entities/stand.entity';
import { StandAssignment } from '../stand-assignments/entities/stand-assignment.entity';

@Injectable()
export class DashboardService {

  constructor(

    @InjectRepository(FlightPlan)
    private readonly flightRepository: Repository<FlightPlan>,

    @InjectRepository(Stand)
    private readonly standRepository: Repository<Stand>,

    @InjectRepository(StandAssignment)
    private readonly assignmentRepository: Repository<StandAssignment>,

  ) {}

  async getDashboard() {

    const totalFlights =
      await this.flightRepository.count();

    const arrivals =
      await this.flightRepository.count({
        where: {
          flightPlanType: 'Arrival',
        },
      });

    const departures =
      await this.flightRepository.count({
        where: {
          flightPlanType: 'Departure',
        },
      });

    const totalStands =
      await this.standRepository.count();

    const assignedStands =
      await this.assignmentRepository.count();

    return {

      totalFlights,

      arrivals,

      departures,

      availableStands:
        totalStands - assignedStands,

    };

  }

}
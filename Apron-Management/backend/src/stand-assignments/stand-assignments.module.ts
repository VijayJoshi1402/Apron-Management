import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FlightPlan } from '../flight-plans/entities/flight-plan.entity';
import { Stand } from '../stands/entities/stand.entity';
import { StandAssignment } from './entities/stand-assignment.entity';

import { StandAssignmentsController } from './stand-assignments.controller';
import { StandAssignmentsService } from './stand-assignments.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      StandAssignment,
      FlightPlan,
      Stand,
    ]),
  ],
  controllers: [StandAssignmentsController],
  providers: [StandAssignmentsService],
})
export class StandAssignmentsModule {}
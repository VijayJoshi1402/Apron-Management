import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';

import { FlightPlan } from '../flight-plans/entities/flight-plan.entity';
import { Stand } from '../stands/entities/stand.entity';
import { StandAssignment } from '../stand-assignments/entities/stand-assignment.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      FlightPlan,
      Stand,
      StandAssignment,
    ]),
  ],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule {}
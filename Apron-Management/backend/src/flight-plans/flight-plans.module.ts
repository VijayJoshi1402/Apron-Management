import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FlightPlansController } from './flight-plans.controller';
import { FlightPlansService } from './flight-plans.service';
import { FlightPlan } from './entities/flight-plan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FlightPlan])],
  controllers: [FlightPlansController],
  providers: [FlightPlansService],
  exports: [FlightPlansService],
})
export class FlightPlansModule {}
import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { FlightPlansService } from './flight-plans.service';
import { CreateFlightPlanDto } from './dto/create-flight-plan.dto';
import { UpdateFlightPlanDto } from './dto/update-flight-plan.dto';

@Controller('flight-plans')
export class FlightPlansController {
  constructor(
    private readonly flightPlansService: FlightPlansService,
  ) {}

  @Get()
  findAll(@Query() query: any) {
    return this.flightPlansService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.flightPlansService.findOne(+id);
  }

  @Get(':id/linked')
  findLinkedFlights(
    @Param('id') id: string,
  ) {
    return this.flightPlansService.findLinkedFlights(
      +id,
    );
  }

  @Post()
  create(
    @Body()
    dto: CreateFlightPlanDto,
  ) {
    return this.flightPlansService.create(dto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,

    @Body()
    dto: UpdateFlightPlanDto,
  ) {
    return this.flightPlansService.update(
      +id,
      dto,
    );
  }
}
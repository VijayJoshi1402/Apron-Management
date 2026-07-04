import {
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';

import { CreateStandAssignmentDto } from './dto/create-stand-assignment.dto';
import { StandAssignmentsService } from './stand-assignments.service';

@Controller('stand-assignments')
export class StandAssignmentsController {
  constructor(
    private readonly assignmentService: StandAssignmentsService,
  ) {}

  @Get()
  findAll() {
    return this.assignmentService.findAll();
  }

  @Post()
  create(
    @Body()
    dto: CreateStandAssignmentDto,
  ) {
    return this.assignmentService.create(dto);
  }
}
import {
  Controller,
  Get,
  Param,
} from '@nestjs/common';

import { StandsService } from './stands.service';

@Controller('stands')
export class StandsController {
  constructor(
    private readonly standsService: StandsService,
  ) {}

  @Get()
  findAll() {
    return this.standsService.findAll();
  }

  @Get(':stand')
  findOne(
    @Param('stand') stand: string,
  ) {
    return this.standsService.findOne(stand);
  }
}
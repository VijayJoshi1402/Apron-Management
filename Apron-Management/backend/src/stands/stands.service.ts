import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Stand } from './entities/stand.entity';

@Injectable()
export class StandsService {
  constructor(
    @InjectRepository(Stand)
    private readonly standRepository: Repository<Stand>,
  ) {}

  async findAll(): Promise<Stand[]> {
    return this.standRepository.find({
      order: {
        stand: 'ASC',
      },
    });
  }

  async findOne(stand: string): Promise<Stand | null> {
    return this.standRepository.findOne({
      where: {
        stand,
      },
    });
  }
}
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

import { FlightPlan } from '../flight-plans/entities/flight-plan.entity';
import { Stand } from '../stands/entities/stand.entity';
import { StandAssignment } from '../stand-assignments/entities/stand-assignment.entity';

import flightsJson from '../../data/flightplans.json';
import standsJson from '../../data/stands.json';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(FlightPlan)
    private readonly flightRepository: Repository<FlightPlan>,

    @InjectRepository(Stand)
    private readonly standRepository: Repository<Stand>,

    @InjectRepository(StandAssignment)
    private readonly assignmentRepository: Repository<StandAssignment>,

    private readonly dataSource: DataSource,
  ) {}

  async seed() {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      // Clear tables
      await queryRunner.query(
        'TRUNCATE TABLE stand_assignments RESTART IDENTITY CASCADE',
      );

      await queryRunner.query(
        'TRUNCATE TABLE flight_plans RESTART IDENTITY CASCADE',
      );

      await queryRunner.query(
        'TRUNCATE TABLE stands RESTART IDENTITY CASCADE',
      );

      const flights = flightsJson as any[];
      const stands = standsJson as any[];

      const batchSize = 50;

      // -----------------------------
      // Flights
      // -----------------------------
      for (let i = 0; i < flights.length; i += batchSize) {
        const batch = flights.slice(i, i + batchSize).map((item) => ({
          ...item,
          created: item.created ? new Date(item.created) : null,
          updated: item.updated ? new Date(item.updated) : null,
          aibt: item.aibt ? new Date(item.aibt) : null,
          sta: item.sta ? new Date(item.sta) : null,
          aobt: item.aobt ? new Date(item.aobt) : null,
          std: item.std ? new Date(item.std) : null,
        }));

        await queryRunner.manager
          .createQueryBuilder()
          .insert()
          .into(FlightPlan)
          .values(batch)
          .execute();
      }

      // -----------------------------
      // Remove duplicate stands
      // -----------------------------
      const uniqueStands = Array.from(
        new Map(
          stands.map((stand) => [stand.stand, stand])
        ).values(),
      );

      // -----------------------------
      // Stands
      // -----------------------------
      for (let i = 0; i < uniqueStands.length; i += batchSize) {
        const batch = uniqueStands.slice(i, i + batchSize);

        await queryRunner.manager
          .createQueryBuilder()
          .insert()
          .into(Stand)
          .values(batch)
          .orIgnore()
          .execute();
      }

      await queryRunner.commitTransaction();

      return {
        success: true,
        message: 'Database seeded successfully.',
        flightsImported: flights.length,
        standsImported: uniqueStands.length,
      };
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }
}
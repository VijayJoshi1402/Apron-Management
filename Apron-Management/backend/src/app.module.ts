import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FlightPlansModule } from './flight-plans/flight-plans.module';
import { StandAssignmentsModule } from './stand-assignments/stand-assignments.module';
import { StandsModule } from './stands/stands.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRootAsync({
      inject: [ConfigService],

      useFactory: (config: ConfigService) => ({
        type: 'postgres',

        host: config.get<string>('DB_HOST'),

        port: Number(config.get<number>('DB_PORT')),

        username: config.get<string>('DB_USERNAME'),

        password: config.get<string>('DB_PASSWORD'),

        database: config.get<string>('DB_DATABASE'),

        autoLoadEntities: true,

        synchronize: true,
      }),
    }),

    FlightPlansModule,

    StandsModule,

    StandAssignmentsModule,

    SeedModule,
  ],
})
export class AppModule {}
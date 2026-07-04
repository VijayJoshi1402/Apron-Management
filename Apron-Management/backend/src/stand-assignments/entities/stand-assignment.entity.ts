import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { FlightPlan } from '../../flight-plans/entities/flight-plan.entity';
import { Stand } from '../../stands/entities/stand.entity';

@Entity('stand_assignments')
export class StandAssignment {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => FlightPlan, {
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'flightPlanId' })
  flightPlan!: FlightPlan;

  @ManyToOne(() => Stand, {
    eager: true,
  })
  @JoinColumn({ name: 'standCode' })
  stand!: Stand;

  @Column()
  flightPlanId!: number;

  @Column()
  standCode!: string;

  @Column({
    type: 'timestamp',
  })
  fromTime!: Date;

  @Column({
    type: 'timestamp',
  })
  toTime!: Date;

  @Column({
    nullable: true,
  })
  remarks!: string;
}
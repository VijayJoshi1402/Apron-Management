import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('flight_plans')
export class FlightPlan {
  @PrimaryColumn()
  id!: number;

  @Column({ nullable: true })
  ifplid!: string;

  @Column({ nullable: true })
  flightId!: string;

  @Column({ nullable: true })
  flightPlanType!: string;

  @Column({ nullable: true })
  flightPlanAction!: string;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  created!: Date;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  updated!: Date;

  @Column({ nullable: true })
  linkedFlightId!: string;

  @Column({ nullable: true })
  linkedFlightPlanType!: string;

  @Column({
    type: 'date',
    nullable: true,
  })
  originDate!: string;

  @Column({ nullable: true })
  carrier!: string;

  @Column({ nullable: true })
  flightNumber!: string;

  @Column({ nullable: true })
  calculatedCallsign!: string;

  @Column({ nullable: true })
  aircraftRegistration!: string;

  @Column({ nullable: true })
  aircraftType!: string;

  @Column({ nullable: true })
  aircraftTypeIcao!: string;

  @Column({ nullable: true })
  adep!: string;

  @Column({ nullable: true })
  ades!: string;

  @Column({ nullable: true })
  stand!: string;

  @Column({ nullable: true })
  apron!: string;

  @Column({ nullable: true })
  terminal!: string;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  aibt!: Date;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  sta!: Date;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  aobt!: Date;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  std!: Date;
}
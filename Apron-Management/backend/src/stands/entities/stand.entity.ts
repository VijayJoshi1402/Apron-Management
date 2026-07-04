import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('stands')
export class Stand {
  @PrimaryColumn()
  stand!: string;

  @Column({
    nullable: true,
  })
  apron!: string;

  @Column({
    nullable: true,
  })
  terminal!: string;
}
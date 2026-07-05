import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('stands')
export class Stand {

  @PrimaryColumn({
    type: 'varchar',
  })
  stand!: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  apron!: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  terminal!: string | null;

}
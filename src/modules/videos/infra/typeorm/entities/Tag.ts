import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import Area from '../../../../teachers/infra/typeorm/entities/Area';

@Entity('tags')
class Tag {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  area_id: string;

  @ManyToOne(() => Area)
  @JoinColumn({ name: 'area_id' })
  area: Area;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Tag;

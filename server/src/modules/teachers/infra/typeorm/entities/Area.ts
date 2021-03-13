import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import User from '../../../../users/infra/typeorm/entities/User';
import Tag from '../../../../videos/infra/typeorm/entities/Tag';

@Entity('areas')
class Area {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Tag, tags => tags.area)
  tags: Tag[];

  @OneToOne(() => User, user => user.area)
  user: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Area;

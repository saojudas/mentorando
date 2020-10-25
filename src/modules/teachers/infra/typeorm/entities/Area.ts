import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('areas')
class Area {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  // @OneToMany(() => Tags, tag => tag)
  // @JoinColumn({ name: 'tags_id' })
  // tags: Tags;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Area;

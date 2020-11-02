import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import Area from '../../../../teachers/infra/typeorm/entities/Area';
import User from '../../../../users/infra/typeorm/entities/User';
import Tag from './Tag';

@Entity('videos')
class Video {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  video_link: string;

  @Column()
  description: string;

  @Column()
  area_id: string;

  @OneToOne(() => Area)
  @JoinColumn({ name: 'area_id' })
  area: Area;

  @ManyToMany(() => Tag, tag => tag.videos, {
    cascade: ['insert', 'update'],
    eager: true,
  })
  @JoinTable({
    name: 'videos_tags',
    joinColumn: { name: 'video_id' },
    inverseJoinColumn: { name: 'tag_id' },
  })
  tags: Tag[];

  @Column()
  user_id: string;

  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Video;

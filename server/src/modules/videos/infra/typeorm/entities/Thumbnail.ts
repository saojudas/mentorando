import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import Video from './Video';

@Entity('thumbnails')
class Thumbnail {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  size: number;

  @Column()
  key: string;

  @Column()
  url: string;

  @Column()
  video_id: string;

  @OneToOne(() => Video)
  @JoinColumn({ name: 'video_id' })
  video: Video;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Thumbnail;

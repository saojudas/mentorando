import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import Video from '../../../../videos/infra/typeorm/entities/Video';
import Meet from '../../../../meet/infra/typeorm/entities/Meet';
import Area from '../../../../teachers/infra/typeorm/entities/Area';
import Teacher from '../../../../teachers/infra/typeorm/entities/Teacher';
import Student from '../../../../students/infra/typeorm/entities/Student';
import UserAvatar from './UserAvatar';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password_hash: string;

  @OneToOne(() => Teacher, teacher => teacher.user)
  teacher: Teacher;

  @OneToOne(() => Student, student => student.user)
  student: Student;

  @ManyToMany(() => Meet, meet => meet.members)
  meets: Meet[];

  @OneToOne(() => UserAvatar, userAvatar => userAvatar.user)
  avatar: UserAvatar;

  @Column()
  area_id: string;

  @OneToOne(() => Area)
  @JoinColumn({ name: 'area_id' })
  area: Area;

  @OneToMany(() => Video, video => video.user)
  videos: Video[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default User;

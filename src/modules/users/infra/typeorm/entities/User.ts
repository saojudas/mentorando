import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import Meet from '../../../../meet/infra/typeorm/entities/Meet';
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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default User;

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

import User from '../../../../users/infra/typeorm/entities/User';

@Entity('meets')
class Meet {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  meet_link: string;

  @CreateDateColumn()
  date_meet: Date;

  @Column()
  start_hour: string;

  @Column()
  end_hour: string;

  @Column()
  organizer_id: string;

  @OneToOne(() => User)
  @JoinColumn({ name: 'organizer_id' })
  organizer: User;

  @ManyToMany(() => User, user => user.meets, {
    cascade: ['insert', 'update'],
    eager: true,
  })
  @JoinTable({
    name: 'meets_members',
    joinColumn: { name: 'meet_id' },
    inverseJoinColumn: { name: 'user_id' },
  })
  members: User[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Meet;

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

import Student from '../../../../students/infra/typeorm/entities/Student';
// import Teacher from '../../../../teachers/infra/typeorm/entities/Teacher';

@Entity('reports')
class Report {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToMany(() => Student, student => student.reports, {
    cascade: ['insert', 'update', 'remove'],
    eager: true,
  })
  @JoinTable({
    name: 'reports_students',
    joinColumn: { name: 'report_id' },
    inverseJoinColumn: { name: 'student_id' },
  })
  students: Student[];

  @Column()
  subject_matter: string;

  @Column()
  report_date: Date;

  @Column()
  start_hour: string;

  @Column()
  end_hour: string;

  @Column()
  advisor_id: string;

  @OneToOne(() => Student)
  @JoinColumn({ name: 'advisor_id' })
  advisor: Student;

  // @Column()
  // teacher_id: string;

  // @OneToOne(() => Teacher)
  // @JoinColumn({ name: 'teacher_id' })
  // teacher: Teacher;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Report;

import faker from 'faker';
import { hash } from 'bcryptjs';

import { pgConnection } from '../../../../config/db';
import createInsertQuery from '../../../../utils/createInsertQuery';

import ICreateUserDTO from '../../../../modules/users/dtos/ICreateUserDTO';
import ICreateTeacherDTO from '../../../../modules/teachers/dtos/ICreateTeacherDTO';
import ICreateStudentDTO from '../../../../modules/students/dtos/ICreateStudentDTO';

let usersIds: string[] = [];

const totalTeachers = 10;
const totalStudents = 60;
const totalUsers = totalTeachers + totalStudents;

async function createUsers(): Promise<void> {
  const users: ICreateUserDTO[] = [];
  const password_hash = await hash('123456', 8);

  while (users.length < totalUsers) {
    users.push({
      email: faker.internet.email(),
      password_hash,
      username: faker.internet.userName(),
    });
  }

  const usersPromise = users.map(user =>
    pgConnection.query(createInsertQuery('users', user)),
  );

  const createdUsers = await Promise.all(usersPromise);

  usersIds = createdUsers.map(item => item.rows[0].id);
}

async function createTeachers(): Promise<void> {
  const teachers: ICreateTeacherDTO[] = [];

  while (teachers.length < totalTeachers) {
    teachers.push({
      name: faker.name.findName(),
      university: 'USJT',
      user_id: usersIds[Math.floor(Math.random() * totalUsers)],
    });
  }

  const teachersPromise = teachers.map(teacher =>
    pgConnection.query(createInsertQuery('teachers', teacher)),
  );

  const createdTeachers = await Promise.all(teachersPromise);

  createdTeachers.map(item => item.rows[0].id);
}

async function createStudents(): Promise<void> {
  const students: ICreateStudentDTO[] = [];

  for (let i = 0; students.length < totalStudents; i++) {
    students.push({
      name: faker.name.findName(),
      university: 'USJT',
      registration: `81820360${i + 1}`,
      user_id: usersIds[Math.floor(Math.random() * totalUsers)],
    });
  }

  const studentsPromise = students.map(student =>
    pgConnection.query(createInsertQuery('students', student)),
  );

  const createdTeachers = await Promise.all(studentsPromise);

  createdTeachers.map(item => item.rows[0].id);
}

async function usersSeed(): Promise<void> {
  await createUsers();
  await createTeachers();
  await createStudents();
}

export { usersSeed };

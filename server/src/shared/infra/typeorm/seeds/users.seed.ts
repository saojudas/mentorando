import faker from 'faker';
import { hash } from 'bcryptjs';

import { pgConnection } from '../../../../config/db';
import createInsertQuery from '../../../../utils/createInsertQuery';

import ICreateUserDTO from '../../../../modules/users/dtos/ICreateUserDTO';
import ICreateUserAvatarDTO from '../../../../modules/users/dtos/ICreateUserAvatarDTO';
import ICreateTeacherDTO from '../../../../modules/teachers/dtos/ICreateTeacherDTO';
import ICreateStudentDTO from '../../../../modules/students/dtos/ICreateStudentDTO';

let teacherId = '';
let studentId = '';
let usersIds: string[] = [];
let teachersIds: string[] = [];
let studentsIds: string[] = [];

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

  for (let i = 0; i < usersIds.length; i++) {
    if (i + 1 <= totalTeachers) {
      teachers.push({
        name: faker.name.findName().replace("'", ''),
        university: 'USJT',
        user_id: usersIds[i],
      });
    }
  }

  const teachersPromise = teachers.map(teacher =>
    pgConnection.query(createInsertQuery('teachers', teacher)),
  );

  const createdTeachers = await Promise.all(teachersPromise);

  teachersIds = createdTeachers.map(item => item.rows[0].id);
}

async function createStudents(): Promise<void> {
  const students: ICreateStudentDTO[] = [];

  for (let i = 0; i < usersIds.length; i++) {
    if (i + 1 > totalTeachers) {
      students.push({
        name: faker.name.findName().replace("'", ''),
        university: 'USJT',
        registration: `81820360${i + 1}`,
        user_id: usersIds[i],
      });
    }
  }

  const studentsPromise = students.map(student =>
    pgConnection.query(createInsertQuery('students', student)),
  );

  const createdStudents = await Promise.all(studentsPromise);

  studentsIds = createdStudents.map(item => item.rows[0].id);
}

async function updateAvatars(): Promise<void> {
  const usersAvatars: ICreateUserAvatarDTO[] = [];

  for (let i = 0; i < usersIds.length; i++) {
    const avatarName = `avatar${Math.ceil(Math.random() * 6)}.png`;

    usersAvatars.push({
      name: avatarName,
      size: 16916,
      key: avatarName,
      url: `http://localhost:3333/files/${avatarName}`,
      user_id: usersIds[i],
    });
  }

  const usersAvatarsPromise = usersAvatars.map(userAvatar =>
    pgConnection.query(createInsertQuery('users_avatars', userAvatar)),
  );

  const createdUsersAvatars = await Promise.all(usersAvatarsPromise);

  createdUsersAvatars.map(item => item.rows[0].id);
}

async function createSpecificTeacher(): Promise<void> {
  const user: ICreateUserDTO = {
    email: 'nelson.aguiar@mentorando.com',
    password_hash: await hash('123456', 8),
    username: 'NelsonAguiar',
  };

  const createdUser = await pgConnection.query(
    createInsertQuery('users', user),
  );

  const userId = createdUser.rows[0].id;

  usersIds.push(userId);

  const teacher: ICreateTeacherDTO = {
    name: 'Nelson Aguiar',
    university: 'USJT',
    user_id: userId,
  };

  const createdTeacher = await pgConnection.query(
    createInsertQuery('teachers', teacher),
  );

  teacherId = createdTeacher.rows[0].id;

  teachersIds.push(teacherId);
}

async function createSpecificStudent(): Promise<void> {
  const user: ICreateUserDTO = {
    email: 'bruno.futema@mentorando.com',
    password_hash: await hash('123456', 8),
    username: 'BFutema',
  };

  const createdUser = await pgConnection.query(
    createInsertQuery('users', user),
  );

  const userId = createdUser.rows[0].id;

  usersIds.push(userId);

  const student: ICreateStudentDTO = {
    name: 'Bruno Amaral Futema',
    university: 'USJT',
    registration: '81820360',
    user_id: userId,
  };

  const createdTeacher = await pgConnection.query(
    createInsertQuery('students', student),
  );

  studentId = createdTeacher.rows[0].id;

  studentsIds.push(studentId);
}

interface Response {
  teacherId: string;
  studentId: string;
  usersIds: string[];
  teachersIds: string[];
  studentsIds: string[];
}

async function usersSeed(): Promise<Response> {
  await createUsers();
  await createTeachers();
  await createStudents();
  await updateAvatars();
  await createSpecificTeacher();
  await createSpecificStudent();

  return { teacherId, studentId, usersIds, teachersIds, studentsIds };
}

export { usersSeed };

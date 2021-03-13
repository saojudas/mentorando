import { pgConnection } from '../../../../config/db';
import createInsertQuery from '../../../../utils/createInsertQuery';
import createUpdateQuery from '../../../../utils/createUpdateQuery';

import ICreateCandidateDTO from '../../../../modules/students/dtos/ICreateCandidateDTO';

let candidateId = '';

async function associateAreaIdToSpecificUser(area_id: string): Promise<void> {
  const user = await pgConnection.query(
    "SELECT * FROM users WHERE email = 'bruno.futema@mentorando.com'",
  );

  await pgConnection.query(
    createUpdateQuery(user.rows[0].id, 'users', { area_id }),
  );
}

async function createAdvisorCandidate(
  student_id: string,
  teacher_id: string,
): Promise<void> {
  const candidate: ICreateCandidateDTO = {
    student_id,
    teacher_id,
  };

  const createdCandidate = await pgConnection.query(
    createInsertQuery('candidates', candidate),
  );

  candidateId = createdCandidate.rows[0].id;
}

async function approveAdvisorCandidate(
  student_id: string,
  teacher_id: string,
): Promise<void> {
  const student = await pgConnection.query(
    `SELECT * FROM students WHERE id = '${student_id}';`,
  );

  const candidate = await pgConnection.query(
    `SELECT * FROM candidates WHERE id = '${candidateId}';`,
  );

  await pgConnection.query(
    createUpdateQuery(student.rows[0].id, 'students', {
      is_advisor: true,
      teacher_id,
    }),
  );

  await pgConnection.query(
    createUpdateQuery(candidate.rows[0].id, 'candidates', { aprovement: true }),
  );
}

async function advisorsSeed(
  student_id: string,
  teacher_id: string,
  area_id: string,
): Promise<void> {
  await associateAreaIdToSpecificUser(area_id);
  await createAdvisorCandidate(student_id, teacher_id);
  await approveAdvisorCandidate(student_id, teacher_id);
}

export { advisorsSeed };

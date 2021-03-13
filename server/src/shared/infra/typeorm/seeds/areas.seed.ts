import { pgConnection } from '../../../../config/db';
import createInsertQuery from '../../../../utils/createInsertQuery';

import ICreateAreaDTO from '../../../../modules/teachers/dtos/ICreateAreaDTO';

let areasIds: string[] = [];

const fakeAreas = [
  'Segurança da Informação',
  'Suporte Técnico',
  'Desenvolvimento',
  'Qualidade de Software',
  'Administração de Redes',
  'Programador Mobile',
  'DBA',
  'Cloud Computing',
  'DevOps',
  'CTO',
  'SEO',
  'UX Designer',
  'UI Designer',
  'UX/UI Designer',
];

async function createAreas(): Promise<void> {
  const areas: ICreateAreaDTO[] = [];

  for (let i = 0; i < fakeAreas.length; i++) {
    areas.push({
      name: fakeAreas[i],
    });
  }

  const areasPromise = areas.map(area =>
    pgConnection.query(createInsertQuery('areas', area)),
  );

  const createdAreas = await Promise.all(areasPromise);

  areasIds = createdAreas.map(item => item.rows[0].id);
}

interface Response {
  areasIds: string[];
}

async function areasSeed(): Promise<Response> {
  await createAreas();

  return { areasIds };
}

export { areasSeed };

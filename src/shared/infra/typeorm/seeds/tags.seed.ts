import { pgConnection } from '../../../../config/db';
import createInsertQuery from '../../../../utils/createInsertQuery';

import ICreateTagDTO from '../../../../modules/videos/dtos/ICreateTagDTO';

let tagsIds: string[] = [];

const fakeTags = [
  'Node.js',
  'React JS',
  'React Native',
  'GraphQL',
  'Prisma',
  'Next.js',
  'AdonisJS',
  'jQuery',
  'Azure',
  'JavaScript',
  'TypeScript',
  'ECMAScript',
  'Deno',
  'C#',
  'Java',
  'Python',
  'R',
];

async function createTags(areasIds: string[]): Promise<void> {
  const tags: ICreateTagDTO[] = [];

  for (let i = 0; i < fakeTags.length; i++) {
    tags.push({
      name: fakeTags[i],
      area_id: areasIds[Math.floor(Math.random() * areasIds.length)],
    });
  }

  const tagsPromise = tags.map(area =>
    pgConnection.query(createInsertQuery('tags', area)),
  );

  const createdAreas = await Promise.all(tagsPromise);

  tagsIds = createdAreas.map(item => item.rows[0].id);
}

interface Response {
  tagsIds: string[];
}

async function tagsSeed(areasIds: string[]): Promise<Response> {
  await createTags(areasIds);

  return { tagsIds };
}

export { tagsSeed };

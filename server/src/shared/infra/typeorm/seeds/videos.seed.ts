import faker from 'faker';
import { pgConnection } from '../../../../config/db';
import createInsertQuery from '../../../../utils/createInsertQuery';

import ICreateVideoDTO from '../../../../modules/videos/dtos/ICreateVideoDTO';
import ICreateThumbnailDTO from '../../../../modules/videos/dtos/ICreateThumbnailDTO';

let videosIds: string[] = [];

const totalVideos = 120;

async function createVideos(
  areasIds: string[],
  usersIds: string[],
): Promise<void> {
  const videos: Omit<ICreateVideoDTO, 'tags'>[] = [];

  for (let i = 0; i < totalVideos; i++) {
    videos.push({
      title: faker.name.title(),
      video_link: 'https://www.youtube.com/watch?v=MG70VTqzrEw',
      description: faker.lorem.paragraphs(Math.ceil(Math.random() * 6)),
      user_id: usersIds[Math.floor(Math.random() * usersIds.length)],
      area_id: areasIds[Math.floor(Math.random() * areasIds.length)],
    });
  }

  const videosPromise = videos.map(video =>
    pgConnection.query(createInsertQuery('videos', video)),
  );

  const createdVideos = await Promise.all(videosPromise);

  videosIds = createdVideos.map(item => item.rows[0].id);
}

async function createThumbnails(): Promise<void> {
  const thumbnails: ICreateThumbnailDTO[] = [];

  for (let i = 0; i < videosIds.length; i++) {
    const thumbnailName = `thumbnail${Math.ceil(Math.random() * 10)}.jpeg`;

    thumbnails.push({
      name: thumbnailName,
      size: 16916,
      key: thumbnailName,
      url: `http://localhost:3333/files/${thumbnailName}`,
      video_id: videosIds[i],
    });
  }

  const thumbnailsPromise = thumbnails.map(thumbnail =>
    pgConnection.query(createInsertQuery('thumbnails', thumbnail)),
  );

  const createdThumbnails = await Promise.all(thumbnailsPromise);

  createdThumbnails.map(item => item.rows[0].id);
}

async function associateVideosAndTags(): Promise<void> {
  const omniStack = await pgConnection.query(`
    SELECT * FROM tags WHERE name IN ('Node.js', 'React JS', 'React Native');
  `);

  const graphQLStack = await pgConnection.query(`
    SELECT * FROM tags WHERE name IN ('Prisma', 'GraphQL');
  `);

  const videosTagsOmniStack: { video_id: string; tag_id: string }[] = [];
  const videosTagsGraphQL: { video_id: string; tag_id: string }[] = [];

  for (let i = 0; i < videosIds.length; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j < omniStack.rows.length; j++) {
        videosTagsOmniStack.push({
          video_id: videosIds[i],
          tag_id: omniStack.rows[j].id,
        });
      }
    } else {
      for (let j = 0; j < graphQLStack.rows.length; j++) {
        videosTagsGraphQL.push({
          video_id: videosIds[i],
          tag_id: graphQLStack.rows[j].id,
        });
      }
    }
  }

  const videosTagsOmniStackPromise = videosTagsOmniStack.map(videoTag =>
    pgConnection.query(createInsertQuery('videos_tags', videoTag, false)),
  );

  const videosTagsGraphQLPromise = videosTagsGraphQL.map(videoTag =>
    pgConnection.query(createInsertQuery('videos_tags', videoTag, false)),
  );

  await Promise.all(videosTagsOmniStackPromise);
  await Promise.all(videosTagsGraphQLPromise);
}

interface Response {
  videosIds: string[];
}

async function videosSeed(
  areasIds: string[],
  usersIds: string[],
): Promise<Response> {
  await createVideos(areasIds, usersIds);
  await createThumbnails();
  await associateVideosAndTags();

  return { videosIds };
}

export { videosSeed };

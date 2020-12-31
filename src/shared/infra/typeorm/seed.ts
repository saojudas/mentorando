import { usersSeed } from './seeds/users.seed';
import { areasSeed } from './seeds/areas.seed';
import { tagsSeed } from './seeds/tags.seed';
import { videosSeed } from './seeds/videos.seed';

async function init(): Promise<void> {
  const usersResponse = await usersSeed();
  const areasResponse = await areasSeed();
  await tagsSeed(areasResponse.areasIds);

  await videosSeed(areasResponse.areasIds, usersResponse.usersIds);
}

init();

import { usersSeed } from './seeds/users.seed';
import { areasSeed } from './seeds/areas.seed';
import { tagsSeed } from './seeds/tags.seed';

async function init(): Promise<void> {
  await usersSeed();
  const areasResponse = await areasSeed();
  await tagsSeed(areasResponse.areasIds);
}

init();

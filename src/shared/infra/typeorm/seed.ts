import { usersSeed } from './seeds/users.seed';
import { areasSeed } from './seeds/areas.seed';

async function init(): Promise<void> {
  await usersSeed();
  await areasSeed();
}

init();

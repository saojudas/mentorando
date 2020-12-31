import { usersSeed } from './seeds/users.seed';

async function init(): Promise<void> {
  await usersSeed();
}

init();

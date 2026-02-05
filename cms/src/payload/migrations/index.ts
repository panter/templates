import * as migration_20260108_101855 from './20260108_101855';
import * as migration_20260108_104155 from './20260108_104155';
import * as migration_20260204_204207 from './20260204_204207';

export const migrations = [
  {
    up: migration_20260108_101855.up,
    down: migration_20260108_101855.down,
    name: '20260108_101855',
  },
  {
    up: migration_20260108_104155.up,
    down: migration_20260108_104155.down,
    name: '20260108_104155',
  },
  {
    up: migration_20260204_204207.up,
    down: migration_20260204_204207.down,
    name: '20260204_204207'
  },
];

import * as migration_20260108_101855 from './20260108_101855';
import * as migration_20260108_104155 from './20260108_104155';
import * as migration_20260130_120549_blocks from './20260130_120549_blocks';
import * as migration_20260130_125055_mcp from './20260130_125055_mcp';

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
    up: migration_20260130_120549_blocks.up,
    down: migration_20260130_120549_blocks.down,
    name: '20260130_120549_blocks',
  },
  {
    up: migration_20260130_125055_mcp.up,
    down: migration_20260130_125055_mcp.down,
    name: '20260130_125055_mcp'
  },
];

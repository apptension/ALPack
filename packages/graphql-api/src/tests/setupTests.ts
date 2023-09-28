import { DataSource } from 'typeorm';

import { initializeDataSource } from '../data-source';

let conn: DataSource | void;

beforeEach(async () => (conn = await initializeDataSource()));

afterEach(async () => {
  if (conn) {
    await conn.destroy();
  }
});

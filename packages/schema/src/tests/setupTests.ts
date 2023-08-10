import { DataSource } from 'typeorm';
import { initializeDataSource } from '../data-source';
let conn: DataSource | void;

beforeAll(async () => conn = await initializeDataSource());

afterAll(async () => {
    if (conn) {
        await conn.destroy();
    }
});
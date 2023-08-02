import { DataSource, DataSourceOptions } from 'typeorm';

import { Photo } from './entity';

const commonDataSourceOptions = {
  // Cannot use glob for this (join(__dirname, 'entity/*[^index].ts')) because
  // of an issue with the nextjs that is not compiling entity files :(
  entities: [Photo],
};

const appDataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env['POSTGRES_HOST'] ?? '',
  port: 5432,
  username: process.env['POSTGRES_USER'] ?? '',
  password: process.env['POSTGRES_PASSWORD'] ?? '',
  database: process.env['POSTGRES_DATABASE'] ?? '',
  ssl: process.env['NODE_ENV'] === 'production' ? { rejectUnauthorized: false } : false,
  synchronize: false,
  logging: true,
  subscribers: [],
  migrations: ['migrations/*.ts'],
  migrationsTableName: 'migrations',
  migrationsRun: true,
  ...commonDataSourceOptions,
};

const testDataSourceOptions: DataSourceOptions = {
  type: 'sqlite',
  database: ':memory:',
  dropSchema: true,
  synchronize: true,
  logging: false,
  ...commonDataSourceOptions,
};

const dataSourceOptions = process.env['NODE_ENV'] === 'test' ? testDataSourceOptions : appDataSourceOptions;
console.log({ dataSourceOptions });
export const AppDataSource = new DataSource(dataSourceOptions);

export const initializeDataSource = async () => {
  // to initialize initial connection with the database, register all entities
  // and "synchronize" database schema, call "initialize()" method of a newly created database
  // once in your application bootstrap
  return AppDataSource.initialize()
    .then(() => {
      // here you can start to work with your database
      console.log('Data source initialized');
    })
    .catch((error) => console.log('DataSource init ERROR:', error));
};
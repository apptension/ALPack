import { DataSource, DataSourceOptions } from 'typeorm';

import { AccountEntity, CRUDItem, Photo, SessionEntity, UserEntity, VerificationTokenEntity } from './entity';

const commonDataSourceOptions = {
  // Cannot use glob for this (join(__dirname, 'entity/*[^index].ts')) because
  // of an issue with the nextjs that is not compiling entity files :(
  entities: [UserEntity, SessionEntity, AccountEntity, VerificationTokenEntity, Photo, CRUDItem],
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
  migrations: ['src/migrations/*.ts'],
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

export const dataSourceOptions = process.env['NODE_ENV'] === 'test' ? testDataSourceOptions : appDataSourceOptions;
export const AppDataSource = new DataSource(dataSourceOptions);
export const initializeDataSource = async () => {
  // to initialize initial connection with the database, register all entities
  // and "synchronize" database schema, call "initialize()" method of a newly created database
  // once in your application bootstrap
  return AppDataSource.initialize()
    .then((db) => {
      // here you can start to work with your database
      console.log('Data source initialized');
      return db;
    })
    .catch((error) => console.log('DataSource init ERROR:', error));
};

import { database } from '../config';

export default {
  development: {
    client: 'pg',
    connection: database.url,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: { directory: './migrations' },
    seeds: { directory: './seeds' },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};

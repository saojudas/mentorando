import { Pool } from 'pg';

export const pgConnection = new Pool({
  user: 'postgres',
  password: 'docker',
  host: '192.168.99.100',
  port: 5432,
  database: 'db_mentorando',
});

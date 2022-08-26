import 'dotenv/config';

export const database = {
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  db: process.env.DATABASE_NAME,
  dialect: process.env.DATABASE_DIALECT,
}
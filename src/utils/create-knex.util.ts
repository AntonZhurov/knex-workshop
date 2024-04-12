import { knex } from "knex";

export function createKnex() {
  return knex({
    client: "pg",
    connection: {
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT ?? "5432", 10),
      database: process.env.DB_NAME,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
    },
    debug: process.env.DB_LOGGING === "true",
    pool: {
      min: 2,
      max: 40,
      acquireTimeoutMillis: 120000,
    },
  });
}

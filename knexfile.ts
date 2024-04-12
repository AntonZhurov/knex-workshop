import "dotenv/config";

import { join } from "node:path";

import { Knex } from "knex";

const config: Knex.Config = {
  client: process.env.DB_CLIENT ?? "pg",
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
  migrations: {
    loadExtensions: [".ts"],
    tableName: "migrations",
    directory: join(__dirname, "src", "db", "migrations"),
    stub: join(__dirname, "src", "db", "stub", "migration.stub.ts"),
  },
  seeds: {
    directory: join(__dirname, "src", "db", "seeds"),
    stub: join(__dirname, "src", "db", "stub", "seeds.stub.ts"),
  },
};

export default {
  development: config,
  production: config,
  staging: config,
};

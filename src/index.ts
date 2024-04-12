import "dotenv/config";
import { createKnex } from "./utils/create-knex.util";

(async () => {
  const knex = createKnex();
  const users = await knex("users").select();
  console.log(users);
  process.exit(0);
})();

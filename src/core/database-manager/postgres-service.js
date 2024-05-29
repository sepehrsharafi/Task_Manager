import { POSTGRES_SECRETS } from "../secrets/index.js";

import pg from "pg";

const { Client } = pg;
const client = new Client(POSTGRES_SECRETS);

export async function query(sql, variables) {
  await client.connect();
  const res = await client.query(sql, variables);
  await client.end();
  return res;
}

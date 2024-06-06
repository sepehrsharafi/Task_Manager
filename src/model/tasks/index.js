import { query } from "../../core/database-manager/postgres-service.js";

export async function getAllDataQuery() {
  const sqlQuery = `select * from public.tasks`;
  return (await query(sqlQuery)).rows;
}

export async function getDataQuery(taskId) {
  const sqlQuery = `select * from public.tasks WHERE id = $1`;
  const variable = [taskId];
  return (await query(sqlQuery, variable)).rows;
}

export async function insertData(title, description, is_completed) {
  const sqlQuery = `INSERT INTO tasks (title, description, is_completed)
  VALUES ($1, $2, $3);
  `;
  const variable = [title, description, is_completed];
  return query(sqlQuery, variable);
}

export async function checkCompleted(title) {
  const sqlQuery = `UPDATE tasks
    SET is_completed = true
    WHERE title = $1;
    `;
  const variable = [title];
  return query(sqlQuery, variable);
}

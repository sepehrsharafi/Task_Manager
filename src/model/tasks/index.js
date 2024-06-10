import { query } from "../../core/database-manager/postgres-service.js";

export async function getAllDataQuery() {
  const sqlQuery = `
  SELECT * FROM tasks
  ORDER BY id ASC;
`;
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
    WHERE id = $1;
    `;
  const variable = [title];
  return query(sqlQuery, variable);
}

export async function updateData(id, title, description) {
  if (title == null) {
    const sqlQuery = `
    UPDATE tasks
    SET description = $1
    WHERE id = $2;
  `;
    const variables = [description, id];
    return query(sqlQuery, variables);
  }
  if (description == null) {
    const sqlQuery = `
    UPDATE tasks
    SET title = $1
    WHERE id = $2;
  `;
    const variables = [title, id];
    return query(sqlQuery, variables);
  }
}

export async function deleteData(id) {
  const sqlQuery = `
    DELETE FROM tasks
    WHERE id = $1;
  `;
  const variables = [id];
  return query(sqlQuery, variables);
}

export async function deleteAllData() {
  const sqlQuery = `
    TRUNCATE TABLE tasks;
  `;
  return query(sqlQuery);
}

export async function markAllAsCompleted() {
  const sqlQuery = `
    UPDATE tasks
    SET is_completed = true;
  `;
  return query(sqlQuery);
}

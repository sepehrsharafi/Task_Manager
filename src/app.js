import express from "express";
import cors from "cors";

import { query } from "./core/database-manager/postgres-service.js";
import {
  getAllDataQuery,
  insertData,
  getDataQuery,
  checkCompleted,
} from "./model/tasks/index.js";

const data = await getAllDataQuery();

console.log();

const app = express();
const port = 3000;

// Configure CORS middleware
app.use(
  cors({
    origin: "http://127.0.0.1:5500", // Allow requests from this origin
    credentials: true,
  })
);

app.get("/api/tasks", (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

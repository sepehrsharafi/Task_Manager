import express from "express";
import cors from "cors";
import { router as tasksRouter } from "./routes/tasks/index.js";

import {
  getAllDataQuery,
  insertData,
  getDataQuery,
  checkCompleted,
} from "./model/tasks/index.js";

// const data = await getAllDataQuery();

const app = express();
const port = 3300;

app.use(express.json());

app.use(tasksRouter);

// Configure CORS middleware
app.use(
  cors({
    origin: "http://127.0.0.1:5500", // Allow requests from this origin
    credentials: true,
  })
);

// app.use("/", express.static(process.cwd() + "/public"));

// app.get("/api/tasks", (req, res) => {
//   res.send(data);
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

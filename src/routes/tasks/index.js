import express from "express";
const router = express.Router();

import {
  getAllDataQuery,
  insertData,
  getDataQuery,
  checkCompleted,
  updateData,
  deleteData,
  deleteAllData,
  markAllAsCompleted,
} from "../../model/tasks/index.js";

router.use("/", express.static(process.cwd() + "/public"));

router.get("/api/tasks", async (req, res) => {
  res.send(await getAllDataQuery());
});

router.get("/api/tasks/:id", async (req, res) => {
  const data = await getDataQuery(req.params.id);
  res.json(data);
});

router.post("/api/tasks", (req, res) => {
  const reqBody = req.body;
  insertData(reqBody.title, reqBody.description, reqBody.is_completed);
  res.json(reqBody);
});

router.post("/api/tasks/:id", async (req, res) => {
  const rowId = req.params.id;
  const reqBody = req.body;
  updateData(rowId, reqBody.title, reqBody.description);
  res.json(reqBody);
});

router.delete("/api/tasks/:id", async (req, res) => {
  const rowId = req.params.id;
  deleteData(rowId);
  res.send(rowId);
});

router.delete("/api/tasks", async (req, res) => {
  res.send(deleteAllData());
});

router.put("/api/tasks/checked/:id", (req, res) => {
  const rowId = req.params.id;
  checkCompleted(rowId);
  res.send(rowId);
});

router.put("/api/tasks", async (req, res) => {
  res.send(markAllAsCompleted());
});

export { router };

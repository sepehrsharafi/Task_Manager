import express from "express";
const router = express.Router();
import {
  getAllDataQuery,
  insertData,
  getDataQuery,
  checkCompleted,
} from "../../model/tasks/index.js";

router.use("/", express.static(process.cwd() + "/public"));

router.get("/api/tasks", async (req, res) => {
  res.send(await getAllDataQuery());
});

router.get("/api/tasks/:id", async (req, res) => {
  const data = await getDataQuery(req.params.id);
  res.json(data);
});

router.post("/api/tasks", (req, res) => {});

export { router };

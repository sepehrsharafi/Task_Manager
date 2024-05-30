import { query } from "./core/database-manager/postgres-service.js";
import {
  getAllDataQuery,
  insertData,
  getDataQuery,
  checkCompleted,
} from "./model/tasks/index.js";

console.log(await getAllDataQuery());

// const app = express();
// const port = 5000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

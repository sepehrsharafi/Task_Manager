import { query } from "./core/database-manager/postgres-service.js";
import { checkCompleted } from "./model/tasks/index.js";

// const a = `select * from public.tasks`;

// const sqlQuery = await query(a);

// console.log(sqlQuery.rows);

const res = await checkCompleted("adasdads");

console.log(res);

// const app = express();
// const port = 5000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

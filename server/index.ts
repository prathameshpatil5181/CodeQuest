import express from "express";
import cors from "cors";
import { Request, Response } from "express";
import { codingLanguages } from "./data";
import { allproblems, filterprob } from "./GlobalConstants/ProblemConst";
import bodyParser from "body-parser";
import { handleCode2 } from "./Handlers/CodeHandler";

const port: number = 3000;
const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cors());
app.get("/", (req: Request, res: Response) => {
  res.send("hello server is started");
});
app.get("/problems", (req: Request, res: Response) => {
  const probinfo = allproblems.map(
    (x): filterprob => ({
      problemid: x.problemid,
      title: x.title,
      Statement: x.Statement,
      difficulty: x.difficulty,
      acceptance: x.acceptance,
    })
  );

  res.json({ problems: probinfo });
});
app.get("/problem/:id", (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  console.log(id);
  const problem = allproblems.find((x) => x.problemid === id);
  res.json({ problem: problem });
});
app.get("/launguage", (req: Request, res: Response) => {
  res.json({
    launguage: codingLanguages,
  });
});

app.post("/checksolution", (req: Request, res: Response) => {
  handleCode2(req, res);
  return;
});

app.listen(port, () => {
  console.log(`app is listing on the port ${port}`);
});

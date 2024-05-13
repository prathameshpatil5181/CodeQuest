import fs from "fs";
import path from "path";
import { Request, Response } from "express";
import { spawn } from "child_process";
import { directoryPath } from "../../data";
const basepath = path.join(directoryPath, "/Handlers");
const fileName = "frist.cpp";

const runcppcode = (req: Request, res: Response) => {
  try {
    const coderun = spawn(
      "docker",
      [
        "run",
        "--rm",
        "-i",
        "-v",
        `/${basepath}/code:/app`,
        "coderun",
        "./main",
      ],
      {
        stdio: ["pipe", "pipe", "pipe"],
      }
    );
    const inputstream = fs.createReadStream(path.join(basepath, "/input.txt"));
    inputstream.pipe(coderun.stdin);
    let output = "";
    coderun.stdout.on("data", (data) => {
      console.log("stdout");
      console.log(data.toString());
      output += data.toString();
    });
    coderun.stderr.on("data", (data) => {
      console.log("error");
      console.log(data.toString());
    });
    coderun.on("close", (code) => {
      if (code === 0) {
        res.status(200).json({
          success: true,
          error: false,
          output: output,
        });
      } else {
        res.status(200).json({
          success: true,
          error: true,
          output: "not executed",
        });
      }
    });
  } catch (error) {
    console.log("error run code");
    console.log(error);
  }
};

export const handleCppCode = (req: Request, res: Response) => {
  console.log("handle cpp code");
  try {
    const compilecommand = `docker run --rm -v ${basepath}/code:/app coderun g++ -std=c++14 main.cpp -o main`;
    const childprocess = spawn(compilecommand, {
      shell: true,
    });
    let compileerror: string;
    childprocess.stdout.on("data", (data) => {
      console.log("stdout");
      console.log(data.toString());
    });
    childprocess.stderr.on("data", (data) => {
      console.log("error");
      console.log(data.toString());
      compileerror = data.toString();
      return {
        success: false,
      };
    });
    childprocess.on("close", (code) => {
      if (code === 0) {
        runcppcode(req, res);
      } else {
        res.status(200).json({
          success: true,
          error: true,
          output: compileerror,
        });
      }
    });
  } catch (error) {
    console.log("error compiling");
    console.log(error);
  }
};

//g++ -std=c++14 frist.cpp -o frist && ./frist

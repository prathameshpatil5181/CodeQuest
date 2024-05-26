import fs from "fs";
import path from "path";
import { Request, Response } from "express";
import { spawn } from "child_process";
import { directoryPath } from "../../data";
const basepath = path.join(directoryPath, "/Handlers");
import { Readable } from "stream";
const fileName = "frist.cpp";
import { problems } from "../../data";
let problem: {
    input: string;
    output: string;
}[] = [
  {
    input: "9 3 2 7 11 15",
    output: "0 1",
  },
  {
    input: "6 3 3 2 4",
    output: "1 2",
  },
  {
    input: "8 1 2 3 4",
    output: "-1",
  },
  {
    input: "10 2 5 5 2",
    output: "0 1",
  },
];

// Now you have 22 test cases in total.

// const runcppcode = (req: Request, res: Response) => {
//   try {
//     const coderun = spawn(
//       "docker",
//       [
//         "run",
//         "--rm",
//         "-i",
//         "-v",
//         `/${basepath}/code:/app`,
//         "coderun",
//         "./main",
//       ],
//       {
//         stdio: ["pipe", "pipe", "pipe"],
//       }
//     );
//     const inputstream = fs.createReadStream(path.join(basepath, "/input.txt"));
//     inputstream.pipe(coderun.stdin);
//     output = "";
//     let ans: string[] = [];
//     coderun.stdout.on("data", (data) => {
//       console.log("stdout");
//       console.log(data.toString());
//       output += data.toString();
//       // ans.push(data.toString());
//     });
//     coderun.stderr.on("data", (data) => {
//       console.log("error");
//       console.log(data.toString());
//     });
//     coderun.on("close", (code) => {
//       console.log(ans);
//       if (code === 0) {
//         res.status(200).json({
//           success: true,
//           error: false,
//           output: output,
//         });
//       } else {
//         res.status(200).json({
//           success: true,
//           error: true,
//           output: "not executed",
//         });
//       }
//     });
//   } catch (error) {
//     console.log("error run code");
//     console.log(error);
//   }
// };

const runcppcode = (input: string): Promise<string> => {
  return new Promise((resolve, reject) => {
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
      const inputstream = Readable.from(input);
      inputstream.pipe(coderun.stdin);
      let output: string = "";
      coderun.stdout.on("data", (data) => {
        output += data.toString();
      });
      coderun.stderr.on("data", (data) => {
        console.log("error");
        console.log(data.toString());
      });
      coderun.on("close", (code) => {
        if (code === 0) {
          resolve(output);
        } else {
          reject("Execution failed");
        }
      });
    } catch (error) {
      console.log("error run code");
      console.log(error);
    }
  });
};

// export const handleCppCode = (req: Request, res: Response) => {
//   console.log("handle cpp code");
//   try {
//     const compilecommand = `docker run --rm -v ${basepath}/code:/app coderun g++ -std=c++14 main.cpp -o main`;
//     const childprocess = spawn(compilecommand, {
//       shell: true,
//     });
//     let compileerror: string;
//     childprocess.stdout.on("data", (data) => {
//       console.log("stdout");
//       console.log(data.toString());
//     });
//     childprocess.stderr.on("data", (data) => {
//       console.log("error");
//       console.log(data.toString());
//       compileerror = data.toString();
//       return {
//         success: false,
//       };
//     });
//     childprocess.on("close", (code) => {
//       if (code === 0) {
//         runcppcode(req, res);
//       } else {
//         res.status(200).json({
//           success: true,
//           error: true,
//           output: compileerror,
//         });
//       }
//     });
//   } catch (error) {
//     console.log("error compiling");
//     console.log(error);
//   }
// };

export const handleCppCode = async (req: Request, res: Response) => {
  console.log("handle cpp code");

  const probid = req.body.id;

  problem = problems[probid-1]


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
    childprocess.on("close", async (code) => {
      if (code === 0) {
        // running the container multiiple times
        const promises = problem.map((p) => runcppcode(p.input));
        try {
          const results = await Promise.all(promises);
          verifyOutput(req, res, results);
          return;
        } catch (error) {
          console.error(error);
        }
      } else {
        res.status(200).json({
          success: false,
          error: true,
          output: [{output:compileerror}],
        });
      }
    });
  } catch (error) {
    console.log("error compiling");
    console.log(error);
  }
};

//g++ -std=c++14 frist.cpp -o frist && ./frist
const verifyOutput = (req: Request, res: Response, result: string[]) => {
  let response = [];
  let success = true;
  for (let i = 0; i < problem.length; i++) {
    if (problem[i].output === result[i]) {
      response.push({
        input: problem[i].input,
        ExpectedOutput: problem[i].output,
        output: result[i],
        pass: true,
      });
    } else {
      response.push({
        input: problem[i].input,
        ExpectedOutput: problem[i].output,
        output: result[i],
        pass: false,
      });
      success = false;
    }
  }

  return res.status(200).json({
    success: success,
    error: false,
    output: response,
  });
};

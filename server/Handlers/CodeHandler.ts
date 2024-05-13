import fs from "fs";
import path from "path";
import { Request, Response } from "express";
import { directoryPath } from "../data";
import { handleCppCode } from "./CodeHandlers/CppCodeHandler";
// const basepath = path.join(directoryPath, "/Handlers/code/main.cpp");

const fileName = "/Handlers/code/main.cpp";

export const handleCode2 = async (req: Request, res: Response) => {
  const filePath = path.join(directoryPath, fileName);
  const code = req.body.file;
  try {
    fs.writeFile(filePath, code, (err) => {
      if (err) {
        console.error("Error writing file:", err);
        res.status(200).json({
          success: true,
          error: true,
          output: " ",
        });
        return;
      }
    });
    handleCppCode(req, res);
  } catch (error) {
    console.log("error in writing the file");
  }
};

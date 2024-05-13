import "../components/Problem.css";
import { useParams } from "react-router-dom";
import { ChangeEvent, useEffect, useState, useRef } from "react";
import { prob, examp, CodingLanguage } from "../GolbalComponents/Constant.ts";
import CodeEditor from "./editor/CodeEditor.tsx";

interface Iresult {
  success: true;
  error: boolean;
  output: string;
}

const Problem: React.FC = () => {
  const params = useParams();
  const [probval, setProbval] = useState<prob>();
  const [code, setCode] = useState<boolean>(false);
  const [launguage, setLaunguage] = useState<CodingLanguage[]>([]);
  const [selectvalue, setSelectValue] = useState<string>("cpp");
  const [sendToserver, setSendToServer] = useState<boolean>(false);
  const [result, setResult] = useState<Iresult>();
  async function init() {
    let response = await fetch(`http://localhost:3000/problem/${params.id}`, {
      method: "GET",
    });
    let json = await response.json();
    setProbval(json.problem);
    response = await fetch("http://localhost:3000/launguage", {
      method: "GET",
    });
    json = await response.json();

    setLaunguage(json.launguage);
  }

  const handleSubmitCode = async (code: string) => {
    setSendToServer(true);
    try {
      const response = await fetch("http://localhost:3000/checksolution", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          file: code,
          launguage: selectvalue,
        }),
      });

      const jsonResp = await response.json();
      console.log(jsonResp);
      setResult(jsonResp);
    } catch (error) {
      console.log("error sending the code");
      console.log(error);
    }
  };

  useEffect(() => {
    init();
  }, []);

  function handleselect(e: ChangeEvent<HTMLSelectElement>) {
    const value1 = e.target.value;
    console.log(value1);
    setSelectValue(value1);
  }
  return (
    <div className="main">
      <div className="problem">
        <nav className="problem_nav">
          <ul className="options">
            <li>Discription</li>
            <li>Submissions</li>
            <li>Disscuss</li>
          </ul>
        </nav>
        <div className="data">
          <div className="title1 boldtitle">
            {probval?.problemid}. {probval?.title}
          </div>
          <button
            className={`Difficulty ${
              probval?.difficulty === "Medium"
                ? "Medium1"
                : probval?.difficulty === "Hard"
                ? "Hard1"
                : "Easy1"
            }`}
          >
            {probval?.difficulty}
          </button>
          <div className="statement">{probval?.Statement}</div>
          <div className="examples">
            {probval?.examples.map((x: examp) => (
              <div key={x.key}>
                <div className="example">Example:{x.key}</div>
                <div className="excontainer">
                  <div className="input">
                    <span className="boldtitle">Input :&nbsp;&nbsp;</span>
                    {x.input}
                  </div>
                  <div className="ouput">
                    <span className="boldtitle">ouput :&nbsp;&nbsp;</span>{" "}
                    {x.output}
                  </div>
                  <div className="explanation">
                    <span className="boldtitle">Explanation :&nbsp;&nbsp;</span>
                    {x.explanation}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="code-submit">
        <div className="code_components">
          <div className="lang_select">
            <nav className="Select">
              <select name="languages" id="languages" onChange={handleselect}>
                {launguage.map((x) => (
                  <option key={x.name}>{x.name}</option>
                ))}
              </select>
            </nav>
          </div>
          <div className="codeEditor">
            {" "}
            <CodeEditor
              showCode={code}
              setShowCode={setCode}
              handleSubmitCode={handleSubmitCode}
            />
          </div>
        </div>
        <div className="submit_result">
          <div className="nav-class">
            <nav className="test_options">
              <ul className="casefont">
                <li>Testcases</li>
                <li>Results</li>
              </ul>
            </nav>
          </div>
          <div
            className={`result`}
            style={{
              color: result?.error === true ? "red" : "black",
              backgroundColor: result?.error === true ? "#ff62623b" : "",
            }}
          >
            {result?.output}
          </div>
          <div className="buttons">
            <button className="run_testcases">Run</button>
            <button
              className="submit_button"
              onClick={() => {
                setCode(!code);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Problem;

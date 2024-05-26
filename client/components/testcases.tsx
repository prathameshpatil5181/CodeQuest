import React, { useState } from 'react'
interface Itestcase {
  result: {
    input: string;
    ExpectedOutput: string;
    output: string;
    pass: boolean;
  }[];
}

  interface Icase {
    input: string;
    ExpectedOutput: string;
    output: string;
    pass: boolean;
  }

const Testcases:React.FC<Itestcase> = (props) => {

    const [cases,setCase]= useState<Icase>(props.result[0]);
    const [activecase,setActivecase] = useState(0);

    const handleChangeCase = (x:Icase,index:number) =>{
        setCase(x);
        setActivecase(index);
    }

  return (
    <div
      style={{
        overflow: "auto",
        color: "black",
      }}
    >
      <ul
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {props.result.map((x, index) => (
          <li
            key={index}
            style={{
              backgroundColor: activecase === index ? "#000a200d" : "",
              borderRadius: "8px",
              padding: "5px 15px 5px 15px",
              fontSize: "13px",
              color:x.pass===false?"red":"black"
            }}
            onClick={()=>handleChangeCase(x,index)}
          >
            Case {index + 1}
          </li>
        ))}
      </ul>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "90%",
          color: "black",
        }}
      >
        <li
          style={{
            width: "100%",
          }}
          key={0}
        >
          <div>Input</div>
          <div
            style={{
              background: "#000a200d",
              width: "100%",
              padding: "5px 15px 5px 15px",
              borderRadius: "5px",
            }}
          >
            {cases.input}
          </div>
        </li>
        <li
          style={{
            width: "100%",
          }}
          key={1}
        >
          <div>Expected</div>
          <div
            style={{
              background: "#000a200d",
              width: "100%",
              padding: "5px 15px 5px 15px",
              borderRadius: "5px",
            }}
          >
            {cases.ExpectedOutput}
          </div>
        </li>
        <li
          style={{
            width: "100%",
          }}
          key={2}
        >
          <div>Output</div>
          <div
            style={{
              background: "#000a200d",
              width: "100%",
              padding: "5px 15px 5px 15px",
              borderRadius: "5px",
            }}
          >
            {cases.output}
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Testcases

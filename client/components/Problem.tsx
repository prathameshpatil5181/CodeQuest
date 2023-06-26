import '../components/Problem.css'
import {useParams} from "react-router-dom";
import {ChangeEvent, useEffect, useState,useRef} from "react";
import {prob, examp,CodingLanguage} from '../GolbalComponents/Constant.ts';

const Problem: React.FC = () => {
    const params = useParams();
    const [probval, setProbval] = useState<prob>()
    const [textrow,setTextrows]=useState<number>(1);
    const[launguage,setLaunguage]=useState<CodingLanguage[]>([])
    const[selectvalue, setSelectValue]=useState<String>('C++');
    const valueofdiv = useRef<HTMLDivElement>(null);
    async function init() {
        let response = await fetch(`http://localhost:3000/problem/${params.id}`, {
            method: "GET"
        })
        let json = await response.json();
        setProbval(json.problem);
        response = await  fetch('http://localhost:3000/launguage',{
            method:"GET"
        })
        json = await response.json();

        setLaunguage(json.launguage);

    }

    useEffect(() => {
        init();
    }, [])

    function handlerows(e:ChangeEvent<HTMLDivElement>):void{
       const divHeight:number = e.target.offsetHeight;
       let lineHeight = parseInt(e.target?.style.lineHeight);
       const lines:number = divHeight/lineHeight;
        setTextrows(lines);
    }

function handleselect(e:ChangeEvent<HTMLSelectElement>){
        const value1 = e.target.value;
        console.log(value1);
        setSelectValue(value1);
}
    return (
        <>
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
                        <div className="title1 boldtitle">{probval?.problemid}. {probval?.title}</div>
                        <button
                            className={`Difficulty ${probval?.difficulty === 'Medium' ? "Medium1" : probval?.difficulty === "Hard" ? "Hard1" : "Easy1"}`}>{probval?.difficulty}</button>
                        <div className="statement">{probval?.Statement}</div>
                        <div className="examples">
                            {probval?.examples.map((x: examp) => (
                                <div key={x.key}>

                                    <div className="example">Example:{x.key}</div>
                                    <div className='excontainer'>
                                        <div className="input"><span
                                            className="boldtitle">Input :&nbsp;&nbsp;</span>{x.input}</div>
                                        <div className="ouput"><span
                                            className="boldtitle">ouput :&nbsp;&nbsp;</span> {x.output}
                                        </div>
                                        <div className="explanation">
                                            <span className="boldtitle">Explanation :&nbsp;&nbsp;</span>{x.explanation}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="code_submit">
                <div className="code_components">
                    <div className="lang_select">
                        <nav className="Select">
                            <select name="languages" id="languages" onChange={handleselect}>
                                {
                                    launguage.map(x=>(
                                        <option key={x.name}>{x.name}</option>
                                    ))
                                }
                            </select>
                        </nav>
                    </div>
                    <div className="codeEditor">
                        <div className="codeIndexes">
                            {Array.from({ length: textrow }, (_, index) => (
                                <div key={index}>{index + 1}</div>
                            ))}
                        </div>
                        <div className="code_text">
                            <div contentEditable="true" ref={valueofdiv} className="code" style={{lineHeight:'20px'}} onInput={handlerows} ></div>
                        </div>
                    </div>
                </div>
                    <div className="submit_result">
                        <nav className="test_options">
                            <ul className='casefont'>
                                <li>Testcases</li>
                                <li>Results</li>
                            </ul>
                        </nav>
                        <div className="result">
                            this are the results
                        </div>
                     <div className='buttons'>
                         <button className="run_testcases">Run</button>
                        <button className="submit_button">Submit</button>
                     </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Problem;
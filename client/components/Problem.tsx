import '../components/Problem.css'
import {useParams} from "react-router-dom";
import {ChangeEvent, useEffect, useState} from "react";
import {prob, examp} from '../GolbalComponents/Constant.ts';

const Problem: React.FC = () => {
    const params = useParams();
    const [probval, setProbval] = useState<prob>()
    const [textrow,setTextrows]=useState<number>(1);
    async function init() {
        const response = await fetch(`http://localhost:3000/problem/${params.id}`, {
            method: "GET"
        })
        const json = await response.json();
        setProbval(json.problem);

    }

    useEffect(() => {
        init();
    }, [])

    function handlerows(e:ChangeEvent<HTMLInputElement>):void{
        const rows:number=e.target.value.split('\n').length;
        setTextrows(rows);
        console.log(rows);
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
                            <select name="languages" id="languages">
                                <option value="C++">C++</option>
                                <option value="Java">Java</option>
                                <option value="Python">Python</option>
                                <option value="javascript">Javascript</option>
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
                            <textarea className="code" onChange={handlerows} defaultValue=""></textarea>
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
                         <button className="run_testcases">Run Testcases</button>
                        <button className="submit_button">Submit</button>
                     </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Problem;
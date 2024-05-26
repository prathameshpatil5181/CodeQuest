import './allProblems.css'
import {useEffect,useState} from "react";
import {filterprob} from '../GolbalComponents/Constant.ts';
import {Link}from 'react-router-dom';
const Url = 'http://localhost:3000/problems'
const AllProblems: React.FC = () => {
    const[problems1,setPb]=useState<filterprob[]|null>(null);
    async function init(){
        const response:Response= await fetch(Url,{
            method:'GET'
        })
        // setProblems(response);
        const json = await response.json();
        await setPb(json.problems);
    }
    useEffect(()=>{
        init();
    },[])

    return (
        <>
            <div className='problems_table'>
                <table className='table'>
                    <thead>
                    <tr>
                        <th>Status</th>
                        <th className='title'>Title</th>
                        <th>Acceptace</th>
                        <th>Difficulty</th>
                    </tr>
                    </thead>
                    <tbody>
                    {problems1!==null?problems1.map((prob:filterprob) => (
                      <tr key={prob.problemid}>
                          <td className='status'></td>
                          <td className='title'><Link to={`/problem/${prob.problemid}`}>{prob.title}</Link></td>
                          <td className='acceptance'>{prob.acceptance}</td>
                          <td className={prob.difficulty==='Medium'?"Medium":prob.difficulty==="Hard"?"Hard":"Easy"}>{prob.difficulty}</td>
                      </tr>
                    )):null}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default AllProblems;
import logo from '../elements/logo.png'
import '../components/navbar.css'
import {Link,useNavigate} from 'react-router-dom'
import {useState} from "react";

const Navbar: React.FC = () => {
    const [underline, setUnderline] = useState<string>('home');
    const loginpage = useNavigate();
    const handleNavigate = ()=>{
        loginpage('/login')
        setUnderline('login')
    }
    return (
        <nav className='navbar_main'>
            <img className='weblogo' src={logo}/>
            <span className='brandname1'>CodeQuest</span>
            <div className="outercontainer">
                <ul className='navbaroptions'>
                    <li className={underline === 'home' ? 'underline' : ''} id='padd' onClick={() => {
                        setUnderline('home')
                    }}><Link to='/'>Home</Link></li>
                    <li className={underline === 'problem' ? 'underline' : ''} id='padd' onClick={() => {
                        setUnderline('problem')
                    }}><Link to='/AllProblems'>Problems</Link></li>
                    <li className={underline === 'contest' ? 'underline' : ''} id='padd' onClick={() => {
                        setUnderline('contest')
                    }}><Link to='/problem'>Contests</Link></li>
                    <li className={underline === 'discuss' ? 'underline' : ''} id='padd' onClick={() => {
                        setUnderline('discuss')
                    }}><Link to='/'>Discuss</Link></li>
                </ul>
            </div>
            <div className="lastcontainer">
                <button className='loginbutton' onClick={handleNavigate}>
                    Login
                </button>
            </div>
        </nav>
    );
}
export default Navbar;
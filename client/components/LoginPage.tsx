import '../components/loginpage.css'
import logo from "../elements/logo.png";

const LoginPage: React.FC = () => {

    return (
        <>
            <div className="loginpage">
                <div className='input_container'>
                    <div className='brand'>
                <img className='brandlogo' src={logo}/>

                <span className='brandname'>CodeQuest</span>
                    </div>
                    <br/>
                    <p>Your Email</p>
                    <input type='text' id='email'/>
                    <p>Your Password</p>
                    <input type='text'/><br/>
                    <div className='center_button'>
                    <button className='login_button'>Login</button>
                </div>
                    <br/>
                    <div className='more_options'>
                        <span className='no_account'>Sign Up</span>
                        <span className='forgot'>Forgot Password</span>
                    </div>
                </div>
            </div>

        </>
    )
}
export default LoginPage
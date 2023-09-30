import { useState } from 'react';
import email_icon from '../assets/img/email.png';
import password_icon from '../assets/img/password.png';
import user_icon from '../assets/img/person.png';
import './LoginSignup.css';

const LoginSignup = () => {

    const [action, setAction] = useState("Register");

    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action==="Login"?<div></div>: <div className="input">
                    <img src={user_icon} alt="User Icon" />
                    <input type="text" placeholder="Username" />
                </div>}
                <div className="input">
                    <img src={email_icon} alt="Email Icon" />
                    <input type="text" placeholder="Email Address" />
                </div>
                <div className="input">
                    <img src={password_icon} alt="Password Icon" />
                    <input type="password" placeholder="Password"/>
                </div>
            </div>
            {action==="Register"?<div></div>:<div className="forgot-password">Forgot Password? <span>Click Here!</span></div>}
                <div className="submit-container">
                    <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Register")}}>Register</div>
                    <div className={action==="Register"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
                </div>

        </div>
    )
}

export default LoginSignup
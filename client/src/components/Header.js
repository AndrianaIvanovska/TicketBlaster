import React from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/theme.css';


export const Header = () => {

    const navigate = useNavigate();


    const navigateToLogIn = () => {
        navigate("/login");
    };

    const navigateToCreateAccount = () => {
        navigate("/createaccount");
    };



    return < div id="header" >
        <div id="left">
            <Link to={'/'}><img src="./images/logo.png"></img></Link>
            <ul>
                <li><Link to={'/concerts'}>Musical Concerts</Link></li>
                <li><Link to={'/comedy'}>Stand-up Comedy</Link></li>
            </ul>
        </div>
        <input type="text" placeholder="Search"></input>
        <button className="primary" onClick={navigateToLogIn}>Log In</button>
        <button className="secondary" onClick={navigateToCreateAccount}>Create Account</button>
    </div >


}


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SearchResult } from "./SearchResults";
import '../styles/theme.css';


export const Header = () => {

    const [inputValue, setInputValue] = useState('');

    const navigate = useNavigate();


    const navigateToLogIn = () => {
        navigate("/login");
    };

    const navigateToCreateAccount = () => {
        navigate("/createaccount");
    };

    const handleEnterPress = (event) => {
        if (event.key === 'Enter') {
            navigate('/search');
        };
    };

    return < div id="header" >
        <div id="left">
            <Link to={'/'}><img src="./images/logo.png"></img></Link>
            <ul>
                <li><Link to={'/concerts'}>Musical Concerts</Link></li>
                <li><Link to={'/comedy'}>Stand-up Comedy</Link></li>
            </ul>
        </div>
        <input type="text" placeholder="Search" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyPress={handleEnterPress} />
        <button className="primary" onClick={navigateToLogIn}>Log In</button>
        <button className="secondary" onClick={navigateToCreateAccount}>Create Account</button>
    </div >


}


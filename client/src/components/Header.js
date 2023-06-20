import { Link, useNavigate } from "react-router-dom";
// import { useEffect } from "react";


const Header = () => {

    const navigate = useNavigate();


    const navigateToLogIn = () => {
        navigate("/login");
    };

    const navigateToCreateAccount = () => {
        navigate("/createaccount");
    };



    return < div id="header" >
        <img src="./images/logo.png"></img>
        <ul>
            <li><Link to={'/concerts'}>Musical Concerts</Link></li>
            <li><Link to={'/comedy'}>Stand-up Comedy</Link></li>
        </ul>
        <input type="text" placeholder="Search"></input>
        <button onClick={navigateToLogIn()}>Log In</button>
        <button onClick={navigateToCreateAccount()}>Create Account</button>
    </div >


}

export default Header;
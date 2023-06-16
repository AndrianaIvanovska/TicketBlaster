import { Link } from "react-router-dom";

const Header = () => {
    return < div id="header" >
        <img src="./images/logo.png"></img>
        <ul>
            <li><Link to={'/concerts'}>Musical Concerts</Link></li>
            <li><Link to={'/comedy'}>Stand-up Comedy</Link></li>
        </ul>
    </div >
}

export default Header;
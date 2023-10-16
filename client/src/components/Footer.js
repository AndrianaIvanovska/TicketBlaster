import React from "react";
import { Link } from "react-router-dom";
import '../styles/theme.css';


export const Footer = () => {

    return < div id="footer" >
        <Link to={'/'}><img src="./images/logo.png"></img></Link>
        <ul>
            <li><Link to={'/concerts'}>Musical Concerts</Link></li>
            <li><Link to={'/comedy'}>Stand-up Comedy</Link></li>
        </ul>
        <p>Copyright TicketBlaster 2023</p>
    </div >

}
import React from "react";
import {faMeetup} from '@fortawesome/free-brands-svg-icons/faMeetup'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Header = ():JSX.Element=>{
    return <div className="site-header sticky-top py-1 container bg-light border-bottom rounded-bottom">
                <img src="caj.svg" alt="Central Arkansas Javascript" style={{height:"2em"}} />
                <span className="px-2 logo-text"> CAJ - Central Arkansas JavaScript</span>
                <a href="https://www.facebook.com/CentralArkansasJavaScript" target='blank' style={{"color":"#3B5998"}}><span title="Facebook" className=""><i className="bi bi-facebook" ></i></span></a>
                <a href="https://www.meetup.com/javascript-conway/" target='blank'><span title="Meetup" >
                <FontAwesomeIcon icon={faMeetup} color="red" /></span></a>
        </div>
}
export default Header;

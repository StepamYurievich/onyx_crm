import React from 'react';
import './styles/navbar.sass'
import {Link} from "react-router-dom";
import Accordion from "./NavBarItems/Accordion/Accordion.jsx";
const NavBar = () => {
    const [active, setActive] = React.useState(true);
    return (
        <div className={active ? 'header-active' : 'menu'}>
            <ul className={"header_ul"}>
                <li><Link to={'/'}></Link></li>
                <button onClick={()=> setActive(!active)}>{'>'}</button>
            </ul>
            <Accordion/>
        </div>
    );
};

export default NavBar;
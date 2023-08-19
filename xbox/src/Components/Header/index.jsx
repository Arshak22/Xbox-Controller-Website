import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import { ROUTE_NAMES } from "../../Routes";
import './style.css';

import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { ImCart } from "react-icons/im";

import MainLogo from '../../assets/images/Logo.png';

export default function Header() {
    const [activeBar, setActiveBar] = useState(true);

    const handleBar = () => {
        setActiveBar(!activeBar);
    };

    return(
        <>
        <nav className="menu">
                <NavLink to={ROUTE_NAMES.HOME} end><img src={MainLogo} alt="MainLogo" id="mainLogo" /></NavLink>
                <div>
                    <ul id="navbar" className={!activeBar ? "activeMenu": null}>
                        <li>
                            <NavLink to={ROUTE_NAMES.HOME} className="navItem" end>
                                HOME
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ROUTE_NAMES.SHOP} className="navItem" end>
                                SHOP
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ROUTE_NAMES.FAQ} className="navItem" end>
                                FAQ
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="headerBtns">
                    <ImCart className="cartIcon"/>
                    <NavLink to={ROUTE_NAMES.HOME} end className='neon-btn'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Sign In
                    </NavLink>
                </div>
                <div id="mobile">
                        {activeBar ? <FaBars className="bars" onClick={handleBar}/>: <FaTimes className="close" onClick={handleBar}/>}
                </div>
            </nav>
        </>
    );
}
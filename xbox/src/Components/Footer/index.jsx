import React from "react";
import './style.css';
import { NavLink } from "react-router-dom";
import { ROUTE_NAMES } from "../../Routes";
import Logo from '../../assets/images/Logo.png';

export default function Footer() {
    return(
        <div className="footer">
            <div className="footerLogo">
                <NavLink to={ROUTE_NAMES.HOME} end><img src={Logo} alt='logo'/></NavLink>
            </div>
            <ul className="footerMenu">
                <li>
                    <NavLink to={ROUTE_NAMES.HOME} end>
                        HOME
                    </NavLink>
                </li>
                <li>
                    <NavLink to={ROUTE_NAMES.SHOP} end>
                        SHOP
                    </NavLink>
                </li>
                <li>
                    <NavLink to={ROUTE_NAMES.FAQ} end>
                        FAQ
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}
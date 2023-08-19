import React from "react";
import './style.css';
import Logo from '../../assets/images/Logo.png';

export default function Footer() {
    return(
        <div className="footer">
            <div className="footerLogo">
                <img src={Logo} alt='logo'/>
            </div>
            <ul className="footerMenu">
                <li>Home</li>
                <li>Shop</li>
                <li>FAQ</li>
            </ul>
        </div>
    );
}
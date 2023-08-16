import React from "react";
import './style.css';
import Guide from '../../assets/images/GIF/Controller.gif';

export default function Guidelines() {
    return(
        <div className="guidelines">
            <h1 className='second-heading'>Unveiling the Controls</h1>
            <img src={Guide} alt="Guidelines" className="guideController"/>
        </div>
    );
}
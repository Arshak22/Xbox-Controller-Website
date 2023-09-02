import React from "react";
import './style.css';

import QMArk from '../../assets/images/BurningQuestionMark.png';

export default function FAQIntro() {
    return(
        <div className="firstHeroSection FAQIntro">
            <div className='colLF'>
                <h1>Xbox Answers:<br/>Ctrl Your Curiosity</h1>
            </div>
            <div className='colRF'>
                <img src={QMArk} alt="QMArk" className="QMark"/>
            </div>
        </div>
    );
}
import React from "react";
import './style.css';

import QMArk from '../../assets/images/BurningQuestionMark.png';

export default function FAQIntro() {
    return(
        <div className="firstHeroSection FAQIntro">
            <div className='colL'>
                <h1>Xbox Answers:<br/>Ctrl Your Curiosity</h1>
            </div>
            <div className='colR'>
                <img src={QMArk} alt="QMArk" className="QMark"/>
            </div>
        </div>
    );
}
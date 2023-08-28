import React from "react";
import './style.css';

import Pic from '../../assets/images/ShopMainImg.png';

export default function Shopintro() {
    return(
        <div className="ShopIntro">
            <img src={Pic} alt="shopmain"/>
        </div>
    );
}
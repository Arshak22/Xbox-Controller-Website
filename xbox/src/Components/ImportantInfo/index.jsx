import React from 'react';
import './style.css';
import DuoPic from '../../assets/images/FinalDuo.png';

export default function ImportantInfo() {
    return (
        <div className='importantInfoSection'>
            <div className='col-2L'>
                <img src={DuoPic} alt="DuoPic"/>
            </div>
            <div className='col-2R'>
                <h1>Seamless Control<br/>Superior Play</h1>
                <p>Experience gaming like never before with Xbox Gamepads that redefine precision, elevate your gaming experience, and effortlessly adapt to your playstyle. Our controllers are the ultimate gaming companions that surpass your expectations, allowing you to conquer virtual worlds with ease.</p>
                <h3 className="underline-hover">Wireless Freedom and Versatility</h3>
                <h3 className="underline-hover">Quality at its Core</h3>
                <h3 className="underline-hover">Intuitive and Easy to Use</h3>
                <h3 className="underline-hover">Ergonomic Excellence</h3>
            </div>
        </div>
    );
}
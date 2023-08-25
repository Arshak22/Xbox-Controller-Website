import React from 'react';
import './style.css';

import Logo from '../../assets/images/Logo.png';

export default function Preloader() {
    return(
        <div className='loader'>
            {console.log('yes')}
            <div className="smart-glass">
                <div className="logo">
                    <div className="circle">
                        <div className="circle">
                            <div className="circle">
                            </div>
                        </div>
                    </div>
                    <div className="hold-x">
                        <img src={Logo} alt="LoadingLogo" className='loadingLogo'/>
                    </div>
                </div>
            </div>
        </div>
    );
}
import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LogoPng from './logoInitialPage.png';
import '../Logo.css';

function Logo() {
    return (
        <div className="row">
            <div className="row">
            <img src={LogoPng} className="img-fluid" alt="Responsive"/>
            </div>
        </div>

    );
}

export default Logo;  

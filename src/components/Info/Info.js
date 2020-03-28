import React from 'react';

import "./Info.css";

function Info() {
    return (<div className="Info mt-2">
        <div className="clip-circle clip-circle-left"></div>
        <div className="clip-circle clip-circle-right"></div>
        <div className="Info-seperator">
        </div>
        <div className="Info-container mt-2">
            <div className="Info-emoji pr-1">
                <img src="./100-emoji.png" alt="100%" />
            </div>
            <div className="Info-text">BEST PRICE GUARANTEED</div>
        </div>
    </div>);
}

export default Info;

import React from 'react';

import "./Cashback.css";

function Cashback({ offerPercentage }) {
    return (<div className="Cashback">
        <i className="fas fa-coffee Cashback-offer pr-1"></i>
        <p className="Cashback-text pr-1">Upto {offerPercentage}% Cashback</p>
        <i className="far fa-question-circle Cashback-info"></i>
    </div>);
}

export default Cashback;
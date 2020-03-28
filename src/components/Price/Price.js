import React from 'react';

import "./Price.css";

function Price({price}) {
    return (<div className="Price">
        <div className="text-muted pb-1">from</div>
        <div className="Price-text">${price}</div>
    </div>);
}

export default Price;

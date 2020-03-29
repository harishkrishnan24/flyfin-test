import React from 'react';

import "./OfferContainer.css";

import Cashback from '../Cashback/Cashback';
import Price from '../Price/Price';
import DatePicker from '../DatePicker/DatePicker';
import Button from '../../common/Button/Button';
import Info from '../Info/Info';


function OfferContainer() {
    return (<div className="OfferContainer">
        <Cashback offerPercentage={5} />
        <hr className="text-muted opacity-half" />
        <div className="mt-2">
            <Price price={139} />
        </div>
        <div className="mt-2">
            <DatePicker />
        </div>
        <div className="mt-2">
            <Button />
        </div>
        <Info />
    </div>);
}

export default OfferContainer;


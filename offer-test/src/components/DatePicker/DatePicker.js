import React from 'react';

import "./DatePicker.css";

function DatePicker() {
    return (<div className="DatePicker">
        <div className="Datepicker-dropdown">
            <i className="fas fa-caret-down Datepicker-dropdown-icon"></i>
        </div>
        <select className="select-css">
            <option>Select a Date</option>
        </select>
    </div>);
}

export default DatePicker;

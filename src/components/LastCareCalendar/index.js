import React from 'react';
import './lastCareCalendar.css';

export default function LastCareCalendar(props) {
    return (
        <p>
            <label>Last care: </label>
            <input
                className='last-care-calendar'
                type="date"
                value={props.lastCare.toJSON().slice(0, 10)}
                onChange={(event) => props.onLastCareChanged(event.target.value)} 
               />
        </p>
    )
}


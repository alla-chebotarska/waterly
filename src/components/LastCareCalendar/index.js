import React from 'react'

export default function LastCareCalendar(props) {
    return (
        <div>
            <h5>Last care</h5>
            <input
                type="date"
                value={props.lastCare}
                onChange={(event) => props.onLastCareChanged(event.target.value)} />
        </div>
    )
}


import React from 'react';
import PlantImage from '../PlantImage';
import sprayer from '../../icons/sprayer.svg';
import './taskCard.css';

export default function TaskCard({care, plant, nextCare}) {

    let lastCare = new Date(care.lastCare).toDateString();

    return (
        <div className="task-card-container">
            <div className='plant-image-container'>
                <PlantImage 
                    plantId={plant.plantIconId}
                />
            </div>
            <div className='task-information'>
                <p>{care.careType}</p>
                <p>Last: {lastCare}</p>
            </div>
            <div className='care-icon-container'>
                <img src={sprayer} className='care-type-icon' alt='care icon' />
            </div>
        </div>
    )
}

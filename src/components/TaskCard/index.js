import React from 'react';
import PlantImage from '../PlantImage';
import sprayer from '../../icons/sprayer.svg';
import './taskCard.css';

export default function TaskCard(props) {

    let careType = "Spraying";
    const lastCare = '15.03.2021';

    return (
        <div className="task-card-container">
            <div className='plant-image-container'>
                <PlantImage 
                src={props.plants.length !== 0 ? props.plants[0].plantIconId : 'icon2'} 
                alt='plant'/>
            </div>
            <div className='task-information'>
                <p>{careType} { props.plants.length !== 0 ? props.plants[0].name : ""}</p>
                <p>Last: {lastCare}</p>
            </div>
            <div className='care-icon-container'>
                <img src={sprayer} className='care-type-icon' />
            </div>
        </div>
    )
}

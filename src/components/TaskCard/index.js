import React from 'react';
import PlantImage from '../PlantImage';
import sprayer from '../../icons/sprayer.svg';
import drop from '../../icons/drop.svg';
import shovel from '../../icons/shovel.svg';
import './taskCard.css';

export default function TaskCard({ care, plant }) {

    let lastCare = new Date(care.lastCare).toDateString();

    const choseCareIcon = (careType) => {
        let careIcon = shovel;
        switch (careType) {
            case "Watering": careIcon = drop;
                break;
            case "Spraying": careIcon = sprayer;
                break;
            case "Fertilizing": careIcon = shovel;
                break;
        }
        return careIcon;
    }

    return (
        <div className="task-card-container">
            <div className='plant-image-container'>
                <PlantImage
                    plantId={plant.plantIconId}
                />
            </div>
            <div className='task-information'>
                <div style={{overflow: "hidden"}}>
                    <p className="care-information">{care.careType}</p>
                    <p className="care-information plant-name"> {plant.name}</p>
                </div>
                <p className="grey-text">Last: {lastCare}</p>
            </div>
            <div className='care-icon-container'>
                <img src={choseCareIcon(care.careType)} className='care-type-icon' alt='care icon' />
            </div>
        </div>
    )
}

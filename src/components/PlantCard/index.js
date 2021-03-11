import { Divider } from '@material-ui/core';
import React from 'react';
import PlantImage from '../PlantImage';

import './plantCard.css';

export default function PlantCard(props) {
    const plant = props.plant;
    const plantCareInfo = plant.careTypes.map((care) => 
        care.isActive ? 
        <section key={care.name}>
             <div className='plant-information'>{care.name}: every {care.frequency} days</div>
             <div className='plant-information'>Last: {care.lastCare.toDateString()}</div>
         </section> : <div></div>);

    return (
        <div className='plant-card'>
            <div className='garden-plant-image'>
                <PlantImage plantId={plant.plantIconId} />
                <h6>{plant.name}</h6>
            {plantCareInfo}
            </div>
        </div>
    )
}

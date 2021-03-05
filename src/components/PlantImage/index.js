import React from 'react';
import plant from '../../plants/plant.svg';
import './plantImage.css';

export default function PlantImage() {
    return (
        <div>
            <img src={plant} alt="description"></img>
        </div>
    )
}

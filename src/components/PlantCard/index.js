import { Divider } from '@material-ui/core';
import React from 'react';
import PlantImage from '../PlantImage';

import './plantCard.css';

export default function PlantCard() {

    const currentDate = new Date().toJSON().slice(0, 10);

    const plant1 = {
        plantName: "Plant Name",
        wateringFrequency: 1,
        sprayingFrequency: 7,
        fertilizingFrequency: 30,
        lastWatering: currentDate,
        lastSpraying: currentDate,
        lastFertilizing: currentDate,
    }

    return (
        <div className='plant-card'>
            <div className='garden-plant-image'>
                <PlantImage plantId='icon1' />
                <h6>{plant1.plantName}</h6>
                <div className='plant-information'>Watering: every {plant1.wateringFrequency} days</div>
                <div className='plant-information'>Last: {plant1.lastWatering}</div>
                <Divider />
                <div className='plant-information'>Spraying: every {plant1.sprayingFrequency} days</div>
                <div className='plant-information'>Last: {plant1.lastSpraying}</div>
                <Divider />
                <div className='plant-information'>Fertilizing: every {plant1.fertilizingFrequency} days</div>
                <div className='plant-information'>Last: {plant1.lastFertilizing}</div>
            </div>
        </div>
    )
}

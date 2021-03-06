import React from 'react';
import plant from '../../plants/plant.svg';
import './plantImage.css';

export default function PlantImage() {

   const onPlantImgClick = () => {
        console.log("Plant")
    }

    return (
        <div onClick={() => onPlantImgClick()}>
            <img src={plant} alt="selected plant"></img>
        </div>
    )
}

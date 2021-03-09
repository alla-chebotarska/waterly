import React from 'react';
import { plantImagesArray } from '../PlantImage';
import './plantGalery.css';

export default function PlantGalery(props)  {

    return (
        <div>
            {plantImagesArray.map((plant) => (
                    <img
                    key={plant.id}
                    className='plant-galery-image' 
                    src={plant.src}  
                    onClick={() => props.onImgClick(plant.id)}
                    alt="plant"/>
            ))}
        </div>
    )
}

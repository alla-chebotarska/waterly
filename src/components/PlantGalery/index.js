import React from 'react';
import { plantImagesArray } from '../PlantImage';

export default function PlantGalery(props)  {

    return (
        <div>
            {plantImagesArray.map((plant) => (
                    <img src={plant.src}  
                    onClick={() => props.onImgClick(plant.id)}/>
            ))}
        </div>
    )
}

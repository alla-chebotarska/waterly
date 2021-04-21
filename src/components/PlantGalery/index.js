import React from 'react';
import { plantImagesArray } from '../PlantImage';
import './plantGalery.css';

export default function PlantGalery(props) {

    let selectedImage = props.plantIconId;

    return (
        <div className='plant-galery-container'>
            {plantImagesArray.map((plant) => (
                <img
                    key={plant.id}
                    className={plant.id === selectedImage ? 'selectedImage' : 'plant-galery-image'}
                    src={plant.src}
                    onClick={() => props.onImgClick(plant.id)}
                    alt="plant"/>
            ))}
            
        </div>
    )
}



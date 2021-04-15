import React from 'react';
import cactus1 from '../../plants/cactus1.svg';
import cactus from '../../plants/cactus.svg';
import plant1 from '../../plants/plant1.svg';
import plant from '../../plants/plant.svg';
import flower from '../../plants/flower.svg';
import './plantImage.css';

const plantImages = new Map([["icon1", cactus], ["icon2", cactus1], ["icon3", plant1], ["icon4", plant], ["icon5", flower]]);
export const plantImagesArray = Array.from(plantImages.entries()).map(arr => {
    return {
        id: arr[0],
        src: arr[1]
    }
});

export default function PlantImage(props) {
    let img;
    if (props.plantId.startsWith("data:image") || props.plantId.startsWith("http")) {
        img = props.plantId;
    } else {
        img = plantImages.get(props.plantId);
    }

    if (!img) {
        img = flower;
    }

    return (
        <div>
                <img
                    src={img}
                    alt="selected plant"
                    className={props.clickable ? 'plant-image plant-image-background' : 'plant-image'}
                    onClick={props.onPlantImageClick}
                ></img>
        </div>
    )
}

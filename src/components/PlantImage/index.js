import React from 'react';
import plant0 from '../../plants/plant0.svg';
import plant1 from '../../plants/plant1.svg';
import plant2 from '../../plants/plant2.svg';
import plant3 from '../../plants/plant3.svg';
import plant4 from '../../plants/plant4.svg';
import plant5 from '../../plants/plant5.svg';
import plant6 from '../../plants/plant6.svg';
import plant7 from '../../plants/plant7.svg';
import plant8 from '../../plants/plant8.svg';
import plant9 from '../../plants/plant9.svg';
import plant10 from '../../plants/plant10.svg';
import plant11 from '../../plants/plant11.svg';
import './plantImage.css';

const plantImages = new Map([["icon0", plant0], ["icon1", plant1], ["icon2", plant2], ["icon3", plant3], ["icon4", plant4],
                            ["icon5", plant5], ["icon6", plant6], ["icon7", plant7], ["icon8", plant8], ["icon9", plant9],
                            ["icon10", plant10], ["icon11", plant11]]);

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
        img = plant11;
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

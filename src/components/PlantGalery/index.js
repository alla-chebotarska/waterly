import React from 'react';
import cactus1 from '../../plants/cactus1.svg';
import cactus from '../../plants/cactus.svg';
import plant1 from '../../plants/plant1.svg';
import plant from '../../plants/plant.svg';
import flower from '../../plants/flower.svg';

export default function PlantGalery() {
    const plantImages = [cactus1, cactus, plant1, plant, flower];
    return (
        <div>
            {plantImages.map((plant) => 
            <img src={plant} />
            )}
        </div>
    )
}

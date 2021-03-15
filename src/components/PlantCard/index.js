import { Divider } from '@material-ui/core';
import React from 'react';
import PlantImage from '../PlantImage';
import edit from '../../icons/edit.svg';
import trash from '../../icons/trash.svg';
import AlertDialog from '../AlertDialog';

import './plantCard.css';

export default function PlantCard(props) {
    const plant = props.plant;

    const onEditPlantClick = () => {
        let id = props.plant.id;
        console.log(id);
    }


    const plantCareInfo = plant.careTypes.map((care) =>
        care.isActive ?
            <section key={care.name}>
                <Divider />
                <div className='plant-information'>{care.name}: every {care.frequency} days</div>
                <div className='plant-information'>Last: {care.lastCare.toDateString()}</div>
            </section> : <p></p>);

    return (
        <div className='plant-card'>
            <div className='garden-plant-image'>
                <div className='edit-remove-set'>
                    <img
                        className='plant-control'
                        src={edit}
                        alt='edit plant icon'
                        onClick={() => onEditPlantClick()} />
                    <AlertDialog
                        icon={trash}
                        className='plant-control'
                        plantId={props.plant.id}
                        onDeletePlantClick={(plantId) => props.onDeletePlantClick(plantId)} />
                </div>
                <PlantImage plantId={plant.plantIconId} />
                <h6>{plant.name}</h6>
                {plantCareInfo}
            </div>
        </div>
    )
}

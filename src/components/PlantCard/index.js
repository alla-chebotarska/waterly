import { Divider } from '@material-ui/core';
import React from 'react';
import {
    Link
} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import edit from '../../icons/edit.svg';
import trash from '../../icons/trash.svg';
import AlertDialog from '../AlertDialog';
import PlantImage from '../PlantImage';
import './plantCard.css';


export default function PlantCard(props) {
    const plant = props.plant;
    const creationDate = new Date(plant.creationDate).toDateString();
 
    const plantCareInfo = plant.careTypes.map((care, index) =>
        care.isActive ?
            <section key={care.careId}>
                 {index !== 0 ? <div className="plant-card-divider"><Divider  /></div> : ""}
                <div className='plant-information'>{care.careType}: every {care.frequency} days</div>
                <div className='plant-information secondary-text'>Last: {care.lastCare.toDateString()}</div>
            </section> : "");


    return (
        <div className='plant-card'>
            <div className='garden-plant-image'>
                <div className='edit-remove-set'>
                    <Link to={
                        {
                            pathname: ROUTES.ADD_PLANT,
                            plant: plant,
                            title: "Edit Plant",
                        }
                    }>
                        <img
                            className='plant-control'
                            src={edit}
                            alt='edit plant icon'
                            />
                    </Link>
                    <AlertDialog
                        icon={trash}
                        className='plant-control'
                        plantId={props.plant.id}
                        onDeletePlantClick={(plantId) => props.onDeletePlantClick(plantId)} />
                </div>
                <PlantImage plantId={plant.plantIconId} />
                <h6 className="garden-plant-name">{plant.name}</h6>
                <p className="secondary-text">Creation date: {creationDate}</p>
                {plantCareInfo}
            </div>
        </div>
    )
}

import React from 'react';
import {
    Link
} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import Plant from '../../models/Plant';
import MyButton from '../MyButton';
import PlantCard from '../PlantCard';
import './garden.css';


export default function Garden(props) {

    let plantCards = props.plants.map(plant =>
        <div
            key={plant.id}
            className='garden-card'>
            <PlantCard plant={plant} onDeletePlantClick={(plantId) => props.onDeletePlantClick(plantId)} />
        </div>);
    return (
        <div className='garden-container'>
            <h3>Garden</h3>
            <div className='center-component'>
                <Link to={{
                    pathname: ROUTES.ADD_PLANT,
                    plant: new Plant(),
                    title: "Add Plant",
                }}>
                    <MyButton value="Add Plant" />
                </Link>
            </div>
            {props.plants.length === 0 ?
                <div><h5>No plants in the garden</h5></div>
                :
                <div className='garden-card-container'>
                    {plantCards}
                </div>}

        </div>
    )
}

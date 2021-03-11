import React from 'react';
import {
    Link
} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import PlantCard from '../PlantCard';
import './garden.css';


export default function Garden(props) {
    let plantCards = props.plants.map(plant => <div key={plant.id} className='garden-card'><PlantCard plant={plant}/></div>);
    return (
        <div className='garden-container'>
            <h3 className='garden-header'>Garden</h3>
            <div className='garden-add-new'>
                <Link to={ROUTES.ADD_PLANT}>Add_Plant</Link>
            </div>
            <div className='garden-card-container'>
                {plantCards}
            </div>
        </div>
    )
}

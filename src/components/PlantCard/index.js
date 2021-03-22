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
    const creationDate = plant.creationDate;

    const onEditPlantClick = () => {
        let id = props.plant.id;
    }


    // const plantCareInfo = plant.careTypes.map((care) =>
    //     care.isActive ?
    //         <section key={care.name}>
    //             <Divider />
    //             <div className='plant-information'>{care.name}: every {care.frequency} days</div>
    //             <div className='plant-information'>Last: {care.lastCare.toDateString()}</div>
    //         </section> : <p></p>);

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
                            onClick={() => onEditPlantClick()} />
                    </Link>
                    <AlertDialog
                        icon={trash}
                        className='plant-control'
                        plantId={props.plant.id}
                        onDeletePlantClick={(plantId) => props.onDeletePlantClick(plantId)} />
                </div>
                <PlantImage plantId={plant.imageName} />
                <h6>{plant.name}</h6>
                <p>Creation date: {creationDate}</p>
                <p>Care {plant.careTypes}</p>
                {/* {plantCareInfo} */}
            </div>
        </div>
    )
}

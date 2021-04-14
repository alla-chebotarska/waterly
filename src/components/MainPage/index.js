import { React, useEffect, useState } from 'react';
import { Route } from "react-router-dom";
import * as ROUTES from '../../constants/routes';
import Plant from '../../models/Plant';
import PlantConverter from '../../models/PlantConverter';
import AddPlant from '../AddPlant';
import Garden from '../Garden';
import Header from '../Header';
import Settings from '../Settings';
import ToDoList from '../ToDoList';
import './main.css';

export default function MainPage(props) {

    const plantConverter = new PlantConverter();
    const [plants, setPlants] = useState(null);

    useEffect(() => {
        props.firebase.getPlantsCollectionReference().onSnapshot((querySnapshot) => {
            var plants = [];
            querySnapshot.forEach((doc) => {
                plants.push(doc.data());
            });
            setPlants(plants.map(item => plantConverter.plantFromFirestore(item)));
        }
        );
    }, [])

    const onDeletePlantClick = (plantId) => {
        props.firebase.deletePlant(plantId);
    }

    const updatedPlants = (plant) => {
        props.firebase.addPlant(plant);
    }

    const executeCare = (plant, careId) => {
        let now = new Date();
        now.setHours(0, 0, 0, 0);
        plant.careTypes[careId].lastCare = now;
        props.firebase.addPlant(plant);
    }

    const onUploadImage = (file, plantId) => {
        props.firebase.uploadFile(file, plantId);
    }

    return (
        <div>
            <Header />
            <div className='main-page-container'>
                <Route exact path={ROUTES.TODOLIST} render={(props) => (
                    <ToDoList {...props} plants={plants} executeCare={(plant, index) => executeCare(plant, index)} />
                )} />
                <Route path={ROUTES.GARDEN} render={(props) => (
                    <Garden {...props} plants={plants} onDeletePlantClick={(plantId) => onDeletePlantClick(plantId)} />
                )} />
                <Route path={ROUTES.SETTINGS} component={Settings} />
                <Route path={ROUTES.ADD_PLANT} render={(props) => (
                    <AddPlant {...props} plant={new Plant()}
                        onPlantAdd={(plant) => updatedPlants(plant)} 
                        onUploadImage = {onUploadImage}/>
                )} />
            </div>
        </div>
    )
}


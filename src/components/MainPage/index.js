import { React, useState, useEffect } from 'react';
import { Route } from "react-router-dom";
import * as ROUTES from '../../constants/routes';
import PlantConverter from '../../models/PlantConverter';
import AddPlant from '../AddPlant';
import Garden from '../Garden';
import Header from '../Header';
import Settings from '../Settings';
import ToDoList from '../ToDoList';
import './main.css';

export default function MainPage(props) {

    const plantConverter = new PlantConverter();
    const [plants, setPlants] = useState([]);

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

    return (
        <div>
            <Header />
            <div className='main-page-container'>
                <Route exact path={ROUTES.TODOLIST} render={(props) => (
                    <ToDoList {...props} plants={plants} />
                )} />
                <Route path={ROUTES.GARDEN} render={(props) => (
                    <Garden {...props} plants={plants} onDeletePlantClick={(plantId) => onDeletePlantClick(plantId)} />
                )} />
                <Route path={ROUTES.SETTINGS} component={Settings} />
                <Route path={ROUTES.ADD_PLANT} render={(props) => (
                    <AddPlant {...props} onPlantAdd={(plant) => updatedPlants(plant)} />
                )} />
            </div>
        </div>
    )
}


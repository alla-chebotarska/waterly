import { React, useState, useEffect } from 'react';
import { Route } from "react-router-dom";
import * as ROUTES from '../../constants/routes';
import AddPlant from '../AddPlant';
import Garden from '../Garden';
import Header from '../Header';
import Settings from '../Settings';
import ToDoList from '../ToDoList';
import './main.css';

export default function MainPage(props) {

    const [plants, setPlants] = useState([]);

    useEffect(() => {
        props.firebase.getPlantsCollectionReference().onSnapshot((querySnapshot) => {
            var plants = [];
            querySnapshot.forEach((doc) => {
                plants.push(doc.data());
            });
            setPlants(plants);
        }
        );
    })

    // const findPlantIndex = (array, id) => {
    //     return array.findIndex(x => x.id === id);
    // }

    const onDeletePlantClick = (plantId) => {
        // let indexInArray = findPlantIndex(plants, plantId);
        // plants.splice(indexInArray, 1);
        // setPlants([...plants]);

    }

    const updatedPlants = (plant) => {
        props.firebase.addPlant(plant);
        // let indexInArray = findPlantIndex(plants, plant.id);
        // console.log(indexInArray);
        // if (indexInArray === -1) {
        //     setPlants([...plants, plant]);
        // } else {
        //     plants[indexInArray] = plant;
        //     setPlants([...plants]);
        // }
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


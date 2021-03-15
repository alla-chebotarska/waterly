import { React, useState } from 'react';
import { Route } from "react-router-dom";
import * as ROUTES from '../../constants/routes';
import AddPlant from '../AddPlant';
import Garden from '../Garden';
import Header from '../Header';
import Settings from '../Settings';
import ToDoList from '../ToDoList';
import './main.css';

export default function MainPage() {

    const [plants, setPlants] = useState([]);


    const findPlantIndex = (array, id) => {
        return array.findIndex(x => x.id === id);
    }

    const onDeletePlantClick = (plantId) => {
        let indexInArray = findPlantIndex(plants, plantId);
        plants.splice(indexInArray, 1);
        setPlants([...plants]);
    }

    return (
        <div>
            <Header />
            <div className='main-page-container'>
                <Route exact path={ROUTES.TODOLIST} component={ToDoList} />
                <Route path={ROUTES.GARDEN} render={(props) => (
                    <Garden {...props} plants={plants} onDeletePlantClick={(plantId) => onDeletePlantClick(plantId)} />
                )} />
                <Route path={ROUTES.SETTINGS} component={Settings} />
                <Route path={ROUTES.ADD_PLANT} render={(props) => (
                    <AddPlant {...props} onPlantAdd={(plant) => setPlants([...plants, plant])} />
                )} />
            </div>
        </div>
    )
}

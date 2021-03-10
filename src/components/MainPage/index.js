import React from 'react';
import { Route } from "react-router-dom";
import * as ROUTES from '../../constants/routes';
import Garden from '../Garden';
import Header from '../Header';
import ToDoList from '../ToDoList';
import AddPlant from '../AddPlant';
import Settings from '../Settings';
import './main.css';

export default function MainPage() {
    return (
        <div>
            <Header />
            <div className='main-page-container'>
            <Route exact path={ROUTES.TODOLIST} component={ToDoList} />
            <Route path={ROUTES.GARDEN} component={Garden} />
            <Route path={ROUTES.SETTINGS} component={Settings} />
            <Route path={ROUTES.ADD_PLANT} component={AddPlant} />
            </div>
        </div>
    )
}

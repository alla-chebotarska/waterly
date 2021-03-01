import React from 'react';
import { Route } from "react-router-dom";
import * as ROUTES from '../../constants/routes';
import Garden from '../Garden';
import Header from '../Header';
import ToDoList from '../ToDoList';
import AddPlant from '../AddPlant';

export default function MainPage() {
    return (
        <div>
            <Header />
            <Route exact path={ROUTES.ToDoList} component={ToDoList} />
            <Route path={ROUTES.GARDEN} component={Garden} />
            <Route path={ROUTES.ADD_PLANT} component={AddPlant} />
        </div>
    )
}
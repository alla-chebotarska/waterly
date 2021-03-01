import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import AddPlant from '../AddPlant';


export default function Garden() {
    return (
        <div>
            <h3>Garden</h3>
            <Link to={ROUTES.ADD_PLANT}>Add_Plant</Link>
        </div>
    )
}

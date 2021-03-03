import React from 'react';
import {
    Link
} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';


export default function Garden() {
    return (
        <div>
            <h3>Garden</h3>
            <Link to={ROUTES.ADD_PLANT}>Add_Plant</Link>
        </div>
    )
}

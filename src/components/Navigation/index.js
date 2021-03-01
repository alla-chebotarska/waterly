import React from 'react';
import {Link} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

export default function Navigation() {
    return (
        <ul>
            <li>
                <Link to={ROUTES.ToDoList}>To Do List</Link>
            </li>
            <li>
                <Link to={ROUTES.GARDEN}>Garden</Link>
            </li>
        </ul>
    )
}

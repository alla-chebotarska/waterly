import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import SignOut from '../SignOut';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import "./navigation.css";

export default function Navigation() {
    return (
        <ul class='navigation'>
            <li>
                <Link to={ROUTES.TODOLIST}>Waterly</Link>
            </li>
            <li>
                <Link to={ROUTES.TODOLIST}>To-Do List</Link>
            </li>
            <li>
                <Link to={ROUTES.GARDEN}>Garden</Link>
            </li>
            <li>
                <Link to={ROUTES.SETTINGS}>Settings</Link>
            </li>
            <li>
                <SignOut className="active" />
            </li>
        </ul>
    )
}

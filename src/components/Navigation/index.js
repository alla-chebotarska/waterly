import React from 'react';
import { NavLink } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import SignOut from '../SignOut';
import "./navigation.css";

export default function Navigation() {

    return (
        <ul className='navigation'>
            {/* <li>
                <NavLink activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }} to={ROUTES.TODOLIST}>Waterly</NavLink>
            </li> */}
            <li>
                <NavLink
                    exact
                    to={ROUTES.TODOLIST}
                    activeClassName="selected"
                    className='navigation-link'>To-Do List</NavLink>
            </li>
            <li>
                <NavLink
                    to={ROUTES.GARDEN}
                    activeClassName="selected"
                    className='navigation-link'>Garden</NavLink>
            </li>
            <li>
                <NavLink
                    to={ROUTES.SETTINGS}
                    activeClassName="selected"
                    className='navigation-link'>Settings</NavLink>
            </li>
            <li className="signOut">
                <SignOut />
            </li>
        </ul>
    )
}

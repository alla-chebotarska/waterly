import React from 'react';
import { NavLink } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import SignOut from '../SignOut';
import "./navigation.css";
import leaf_white from '../../icons/leaf_white.svg';
import notepad_white from '../../icons/notepad_white.svg';

export default function Navigation() {

    return (
        <ul className='navigation'>
            <li>
                <NavLink
                    exact
                    to={ROUTES.TODOLIST}
                    activeClassName="selected"
                    className='navigation-link'>
                        <img src={notepad_white} alt='navigation-icon-notepad' className='navigation-icon' />
                        To-Do List
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={ROUTES.GARDEN}
                    activeClassName="selected"
                    className='navigation-link'>
                    <img src={leaf_white} alt='navigation-icon-leaf' className='navigation-icon' />
                        Garden
                </NavLink>
            </li>
            {/* TO DO Setting Page */}
            {/* <li>
                <NavLink
                    to={ROUTES.SETTINGS}
                    activeClassName="selected"
                    className='navigation-link'>Settings</NavLink>
            </li>  */}
            <li className="signOut">
                <SignOut />
            </li>
        </ul>
    )
}

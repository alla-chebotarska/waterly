import React from 'react';
import './signInButton.css';


export default function SignInButton(props) {
    return (
        <button
            className='sing-in-button'
            onClick={props.onClick}
            style={{ backgroundColor: props.backgroundColor }}>
            <span className='sign-in-button-icon'>
                {props.icon}
            </span>
            {props.title}
        </button>
    )
}

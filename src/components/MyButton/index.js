import React from 'react';
import './MyButton.css';

export default function MyButton(props) {
    return (
        <button
            type="submit"
            className='my-btn'
            onClick={props.onClick}>
                {props.value}
        </button>
    )
}

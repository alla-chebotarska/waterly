import React from 'react';
import './MyButton.css';

export default function MyButton(props) {
    return (
        <input
            type="submit"
            className='my-btn'
            value={props.value}
            onClick={props.onClick}
        />
    )
}

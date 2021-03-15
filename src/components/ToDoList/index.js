import { Divider } from '@material-ui/core';
import React from 'react';
import TaskCard from '../TaskCard';

export default function ToDoList(props) {

    let dayToNextCare = 2;

    return (
        <div>
            <h3>To do list</h3>
            <h5>In {dayToNextCare} days</h5>
            <TaskCard plants={props.plants}/>
            <Divider />
        </div>
    )
}

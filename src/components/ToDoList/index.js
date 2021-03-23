import { Divider } from '@material-ui/core';
import React from 'react';
import TaskCard from '../TaskCard';

export default function ToDoList(props) {

    let dayToNextCare = 2;

    let taskCards = props.plants.map(plant =>
        <div key={plant.id}>
            <TaskCard plant={plant} />
            <Divider />
        </div>);

    return (
        <div>
            <h3>To do list</h3>
            <h5>In {dayToNextCare} days</h5>
            {taskCards}
        </div>
    )
}

import { Divider, requirePropFactory } from '@material-ui/core';
import React from 'react';
import TaskCard from '../TaskCard';

export default function ToDoList(props) {

    let dayToNextCare = 2;

    const calculateNextCare = (care) => {
        const dayInMiliseconds = 86400000
        const nextCareMiliseconds = care.lastCare.getTime() + care.frequency * dayInMiliseconds;
        let nextCareIn = (nextCareMiliseconds - new Date().setHours(0, 0, 0, 0)) / dayInMiliseconds;
        return nextCareIn;
    }

    let caresWithPlantInfo = [];
    for (var i = 0; i < props.plants.length; ++i) {
        for (var j = 0; j < props.plants[i].careTypes.length; ++j) {
            caresWithPlantInfo.push(
                {
                    plant: props.plants[i],
                    care: props.plants[i].careTypes[j],
                    next: calculateNextCare(props.plants[i].careTypes[j])
                }
            )
        }
    }
    
    let last = null;
    let taskCards = caresWithPlantInfo.sort((a, b) => a.next - b.next).map(
        careWithPlant => {
            let show = false;
            if (last != careWithPlant.next) {
                show = true;
                last=careWithPlant.next;
            }
            return (<div key={careWithPlant.care.id}>
                {show ? <h5>In {careWithPlant.next} days</h5> : "" }
                <TaskCard plant={careWithPlant.plant} care={careWithPlant.care} nextCare={careWithPlant.next} />
                <Divider />
            </div>)
        }
    )
    return (
        <div>
            <h3>To do list</h3>
            {taskCards}
        </div>
    )
}

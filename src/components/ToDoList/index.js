import { Divider } from '@material-ui/core';
import React from 'react';
import TaskCard from '../TaskCard';
import './toDoList.css';

export default function ToDoList(props) {

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
        (careWithPlant, index) => {
            let showDate = false;
            if (last != careWithPlant.next) {
                showDate = true;
                last = careWithPlant.next;
            }

            const mappingDays = (days) => {
                if (days <= -2) {
                    return `${Math.abs(days)} days ago`;
                }
                else if (days === -1) {
                    return `${Math.abs(days)} day ago`;
                } else if (days === 0) {
                    return "Today";
                } else if (days === 1) {
                    return `In ${days} day`;
                } else {
                    return `In ${days} days`;
                }
            }
            return (<div key={careWithPlant.care.id}>
                {showDate ?
                    <div>
                        {index != 0 ? <Divider /> : ""}
                        <h5 className='care-schedule-date'>{mappingDays(careWithPlant.next)}</h5>
                    </div> : ""}
                <TaskCard
                    plant={careWithPlant.plant}
                    care={careWithPlant.care}
                    nextCare={careWithPlant.next}
                    executeCare={(plant, careId) => props.executeCare(plant, careId)} />
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

import React from 'react';
import PlantImage from '../PlantImage';
import sprayer from '../../icons/sprayer.svg';
import drop from '../../icons/drop.svg';
import shovel from '../../icons/shovel.svg';
import MyButton from '../MyButton';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import './taskCard.css';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function TaskCard({ care, plant, executeCare }) {

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    let lastCare = new Date(care.lastCare).toDateString();

    const performCareBtnClick = (plant, index) => {
        handleClick();
        executeCare(plant, index)
    }

    const choseCareIcon = (careType) => {
        let careIcon = shovel;
        switch (careType) {
            case "Watering": careIcon = drop;
                break;
            case "Spraying": careIcon = sprayer;
                break;
            case "Fertilizing": careIcon = shovel;
                break;
            default: careIcon = shovel;
        }
        return careIcon;
    }

    let index = plant.careTypes.findIndex(item => item.careId === care.careId);

    return (
        <div className="task-card-container">
            <div className='plant-image-container'>
                <PlantImage
                    plantId={plant.plantIconId}
                />
            </div>
            <div className='task-information'>
                <div style={{ overflow: "hidden" }}>
                    <p className="care-information">{care.careType}</p>
                    <p className="care-information plant-name"> {plant.name}</p>
                </div>
                <p className="secondary-text">Last: {lastCare}</p>
            </div>
            <div className='execute-care-container'>
                <MyButton value={"Perform"} onClick={() => performCareBtnClick(plant, index)} />
                <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" variant="outlined">
                        Action Compleated!
                    </Alert>
                </Snackbar>
            </div>
            <div className='care-icon-container'>
                <img src={choseCareIcon(care.careType)} className='care-type-icon' alt='care icon' />
            </div>
        </div>
    )
}

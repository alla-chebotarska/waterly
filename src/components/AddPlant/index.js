import TextField from '@material-ui/core/TextField';
import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import Plant from '../../models/Plant';
import Care from '../Care';
import MyButton from '../MyButton';
import PlantImage from '../PlantImage';
import Popup from '../Popup';
import './addPlant.css';

export default class AddPlant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plant: this.props.location.plant == null ? new Plant() : this.props.location.plant,
        }
    }

    setPlant = (plant) => {
        this.setState({
            plant: plant,
        })
    }

    onImgClick = (imageId) => {
        let plant = this.state.plant;
        plant.plantIconId = imageId;
        this.setPlant(plant);
    }

    onPlantNameChanged = (name) => {
        let plant = this.state.plant;
        plant.name = name
        this.setPlant(plant);
    }

    onActiveChange = (index, isActive) => {
        let plant = this.state.plant;
        plant.careTypes[index].isActive = isActive;
        this.setPlant(plant);
    }

    onFrequencySelected = (index, frequency) => {
        let plant = this.state.plant;
        plant.careTypes[index].frequency = frequency;
        this.setPlant(plant);
    };

    onLastCareChanged = (index, lastCare) => {
        let plant = this.state.plant;
        plant.careTypes[index].lastCare = new Date(lastCare);
        this.setPlant(plant);
    }

    onSaveBtnClick = () => {
        this.props.onPlantAdd(this.state.plant);
    }


    render() {
        const plant = this.state.plant;
        let cares = this.state.plant.careTypes.map((care, index) =>
            <div className='care' key={care.careType}>
                <Care
                    title={care.careType}
                    isActive={care.isActive}
                    onActiveChange={(isActive) => this.onActiveChange(index, isActive)}
                    frequency={care.frequency}
                    onFrequencySelected={(frequency) => this.onFrequencySelected(index, frequency)}
                    lastCare={care.lastCare}
                    onLastCareChanged={(lastCare) => this.onLastCareChanged(index, lastCare)}
                />
            </div>)
        return (
            <div className="add-plant-container">
                <h3 className="page-header">{this.props.location.title}</h3>
                <div className='plant-image'>
                    <PlantImage
                        plantId={plant.plantIconId} />
                </div>
                <div className='popup'>
                    <Popup
                        plantIconId={plant.plantIconId}
                        onImgClick={(imageId) => this.onImgClick(imageId)} />
                </div>
                <TextField
                    label="Plant name"
                    value={plant.name}
                    onInput={(event) => this.onPlantNameChanged(event.target.value)}
                    className="plant-name" 
                    autoFocus/>
                <div className='cares'>
                    {cares}
                </div>
                <div className='plant-save'>
                    <Link to={ROUTES.GARDEN}>
                        <MyButton
                            value="Save"
                            onClick={this.onSaveBtnClick}>
                        </MyButton>
                    </Link>
                </div>
            </div>
        )
    }

}




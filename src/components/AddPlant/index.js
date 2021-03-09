import TextField from '@material-ui/core/TextField';
import React, { Component } from 'react';
import Care from '../Care';
import PlantImage from '../PlantImage';
import Popup from '../Popup';
import './addPlant.css';

export default class AddPlant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plantName: "",
            plantIconId: "icon1",
            watering: false,
            spraying: false,
            fertilizing: false,
            wateringFrequency: 1,
            sprayingFrequency: 7,
            fertilizingFrequency: 30,
            lastWatering: this.currentDate,
            lastSpraying: this.currentDate,
            lastFertilizing: this.currentDate,
        }
    }

    currentDate = new Date().toJSON().slice(0, 10);

    onImgClick = (imageId) => {
        this.setState({
            plantIconId: imageId,
        })
        console.log(imageId);
    }

    onPlantNameChanged = (name) => {
        this.setState({
            plantName: name,
        })
    }

    onActiveChange = (type, isActive) => {
        this.setState({
            [type]: isActive
        })
    }

    onFrequencySelected = (type, frequency) => {
        this.setState({
            [type]: frequency,
        })
    };

    onLastCareChanged = (type, lastCare) => {
        this.setState({
            [type]: lastCare,
        })
    }

    render() {
        return (
            <div className="add-plant-container">
                <h3 className="page-header">Add Plant</h3>
                <div className='plant-image'>
                    <PlantImage
                        plantId={this.state.plantIconId} />
                </div>
                <div className='popup'>
                    <Popup 
                    onImgClick={(imageId) => this.onImgClick(imageId)}/>
                </div>
                <TextField
                    label="Plant name"
                    onInput={(event) => this.onPlantNameChanged(event.target.value)}
                    className="plant-name" />
                <div className='watering care'>
                    <Care
                        title={"Watering"}
                        isActive={this.state.watering}
                        onActiveChange={(isActive) => this.onActiveChange("watering", isActive)}
                        frequency={this.state.wateringFrequency}
                        onFrequencySelected={(frequency) => this.onFrequencySelected("wateringFrequency", frequency)}
                        lastCare={this.state.lastWatering}
                        onLastCareChanged={(lastCare) => this.onLastCareChanged("lastWatering", lastCare)}
                    />
                </div>
                <div className='spraying care'>
                    <Care
                        title={"Spraying"}
                        isActive={this.state.spraying}
                        onActiveChange={(isActive) => this.onActiveChange("spraying", isActive)}
                        frequency={this.state.sprayingFrequency}
                        onFrequencySelected={(frequency) => this.onFrequencySelected("sprayingFrequency", frequency)}
                        lastCare={this.state.lastSpraying}
                        onLastCareChanged={(lastCare) => this.onLastCareChanged("lastSpraying", lastCare)}
                    />
                </div>
                <div className='fertilizing care'>
                    <Care
                        title={"Fertilizing"}
                        isActive={this.state.fertilizing}
                        onActiveChange={(isActive) => this.onActiveChange("fertilizing", isActive)}
                        frequency={this.state.fertilizingFrequency}
                        onFrequencySelected={(frequency) => this.onFrequencySelected("fertilizingFrequency", frequency)}
                        lastCare={this.state.lastFertilizing}
                        onLastCareChanged={(lastCare) => this.onLastCareChanged("lastFertilizing", lastCare)}
                    />
                </div>
                <div className='plant-save'>
                    <input
                        type="submit"
                        value="Save"
                        id="saveBtn"
                    />
                </div>
            </div>
        )
    }

}




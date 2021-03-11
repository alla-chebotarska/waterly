import TextField from '@material-ui/core/TextField';
import Plant from '../../models/Plant';
import React, { Component } from 'react';
import Care from '../Care';
import PlantImage from '../PlantImage';
import Popup from '../Popup';
import MyButton from '../MyButton';
import './addPlant.css';

export default class AddPlant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plant: new Plant(),
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
        this.setState({
            plant: new Plant(),
        })
    }

    render() {
        const plant = this.state.plant;
        let cares = this.state.plant.careTypes.map((care, index) => 
        <div className='care' key={care.name}>
            <Care
                title={care.name}
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
                <h3 className="page-header">Add Plant</h3>
                <div className='plant-image'>
                    <PlantImage
                        plantId={plant.plantIconId} />
                </div>
                <div className='popup'>
                    <Popup
                        onImgClick={(imageId) => this.onImgClick(imageId)} />
                </div>
                <TextField
                    label="Plant name"
                    value={plant.name}
                    onInput={(event) => this.onPlantNameChanged(event.target.value)}
                    className="plant-name" />
                <div className='cares'>
                    {cares}
                </div>
                <div className='plant-save'>
                    <MyButton
                        value="Save"
                        onClick={this.onSaveBtnClick} />
                </div>
            </div>
        )
    }

}




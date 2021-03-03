import Divider from '@material-ui/core/Divider';
import React, { Component } from 'react';
import Care from '../Care';

export default class AddPlant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            watering: false,
            spraying: false,
            fertilizing: false,
            wateringFrequency: 1,
            sprayingFrequency: 7,
            fertilizingFrequency: 30, 
        }
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

    render() {
        return (
            <div>
                <h3>Add Plant</h3>
                <form>
                    <input placeholder="PlantName" />
                    <Care
                        title={"Watering"}
                        isActive={this.state.watering}
                        onActiveChange={(isActive) => this.onActiveChange("watering", isActive)}
                        frequency={this.state.wateringFrequency}
                        onFrequencySelected={(frequency) => this.onFrequencySelected("wateringFrequency", frequency)} />
                    <Care
                        title={"Spraying"}
                        isActive={this.state.spraying}
                        onActiveChange={(isActive) => this.onActiveChange("spraying", isActive)} 
                        frequency={this.state.sprayingFrequency}
                        onFrequencySelected={(frequency) => this.onFrequencySelected("sprayingFrequency", frequency)}/>
                    <Care
                        title={"Fertilizing"}
                        isActive={this.state.fertilizing}
                        onActiveChange={(isActive) => this.onActiveChange("fertilizing", isActive)}
                        frequency={this.state.fertilizingFrequency}
                        onFrequencySelected={(frequency) => this.onFrequencySelected("fertilizingFrequency", frequency)} />
                    <Divider />
                    <input type="submit" value="Save" />
                </form>
            </div>
        )
    }

}




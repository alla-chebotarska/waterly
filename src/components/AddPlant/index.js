import Divider from '@material-ui/core/Divider';
import React, { Component } from 'react';
import Care from '../Care';

export default class AddPlant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            watering: true,
            spraying: false,
            fertilizing: true,
        }
    }

    onActiveChange = (type, isActive) => {
        this.setState({
            [type]: isActive
        })
    }

    render() {
        return (
            <div>
                <h3>Add Plant</h3>
                <form>
                    <input placeholder="PlantName" />
                    <Care title={"Watering"} isActive={this.state.watering} onActiveChange={(isActive) => this.onActiveChange("watering", isActive)}/>
                    <Care title={"Spraying"} isActive={this.state.spraying} onActiveChange={(isActive) => this.onActiveChange("spraying", isActive)}/>
                    <Care title={"Fertilizing"} isActive={this.state.fertilizing} onActiveChange={(isActive) => this.onActiveChange("fertilizing", isActive)}/>
                    <Divider />
                    <input type="submit" value="Save" />
                </form>
            </div>
        )
    }

}




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
        }
    }

    render() {
        return (
            <div>
                <h3>Add Plant</h3>
                <form>
                    <input placeholder="PlantName" />
                    <Care title={"Watering"} />
                    <Care title={"Spraying"} />
                    <Care title={"Fertilizing"} />
                    <Divider />
                    <input type="submit" value="Save" />
                </form>
            </div>
        )
    }

}




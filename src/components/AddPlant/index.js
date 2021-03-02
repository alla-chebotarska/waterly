import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CareType from '../CareType';
import Divider from '@material-ui/core/Divider';

export default class AddPlant extends Component {

    constructor(props) {
        super(props);
        this.state = {
            watering: false,
            spraying: false,
        }
    }

    wateringChecked = () => {
        let previousWateringState = this.state.watering;
        this.setState({
            watering: !previousWateringState,
        });
    }

    sprayingChecked = () => {
        let previousWateringState = this.state.spraying;
        this.setState({
            spraying: !previousWateringState,
        });
    }

    render() {
        return (
            <div>
                <h3>Add Plant</h3>
                <form>
                    <TextField id="standard-basic" label="Plant name" />
                    <br />
                    <h5>Watering</h5>
                    <FormControlLabel
                        control={<Switch onChange={() => this.wateringChecked()} />}
                    />
                    {this.state.watering === true ? <CareType /> : <div></div>}

                    <h5>Spraying</h5>
                    <FormControlLabel
                        control={<Switch onChange={() => this.sprayingChecked()} />}
                    />
                    {this.state.spraying === true ? <CareType /> : <div></div>}
                    <Divider />
                    <input type="submit" value="Save" />
                </form>
            </div>
        )
    }

}




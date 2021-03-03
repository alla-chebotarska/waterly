import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import React, { Component } from 'react';
import './daySelector.css';

export default class DaySelector extends Component {
    constructor(){
        super();
        this.state = {
            frequency: 1,
        }
    }

    handleChange = (event) => {
        this.setState({
            frequency: event.target.value,
        })
    };

    render() {
       return (
        <div>
            <p>Every {this.state.frequency}d</p>
                <FormControl className="formControl">
                    <InputLabel>Days</InputLabel>
                    <Select
                       value={this.state.frequency}
                        onChange={this.handleChange}
                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={15}>15</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={25}>25</MenuItem>
                    </Select>
                </FormControl>
                <Divider />
        </div>
    ) 
    }
    
}

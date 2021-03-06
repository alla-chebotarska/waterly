import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import React from 'react';
import './CareFrequency.css';

export default function CareFrequency(props) {
    return (
        <div>
            <p>Every {props.frequency}d</p>
            <FormControl className="formControl">
                <InputLabel>Days</InputLabel>
                <Select
                    value={props.frequency}
                    onChange={(event) => { props.onFrequencySelected(event.target.value) }}
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
        </div>
    )
}


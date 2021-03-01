import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));


export default function CareType() {
    const classes = useStyles();
    const [days, setDays] = React.useState('');

    const handleChange = (event) => {
        setDays(event.target.value);
    };

    let wateringPeriod = 12;
    return (
        <div>
            <p>Every {wateringPeriod}d</p>
                <FormControl className={classes.formControl}>
                    <InputLabel>Days</InputLabel>
                    <Select
                        value={days}
                        onChange={handleChange}
                    >
                        <MenuItem value={1}>One</MenuItem>
                        <MenuItem value={2}>Two</MenuItem>
                        <MenuItem value={3}>Three</MenuItem>
                        <MenuItem value={4}>Four</MenuItem>
                    </Select>
                </FormControl>
                <Divider />
                <h5>Last care</h5>
                <input type="date" />
        </div>
    )
}

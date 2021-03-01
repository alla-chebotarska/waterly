import React from 'react';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CareType from '../CareType'

export default function AddPlant() {
    const [checked, setChecked] = React.useState(false);

    const toggleChecked = () => {
        setChecked((prev) => !prev);
    };

    return (
        <div>
            <h3>Add Plant</h3>
            <form>
                <TextField id="standard-basic" label="Plant name" />
                <br />
                <h5>Watering</h5>
                <FormControlLabel
                    control={<Switch checked={checked} onChange={toggleChecked} />}
                />
                <CareType />
                
                <input type="submit" value="Save" />
            </form>
        </div>
    )
}

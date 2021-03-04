import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function ToggleButton(props) {
    return (
        <div>
            <FormControlLabel
            label={props.title}
            labelPlacement="start"
                control={<Switch
                    checked={props.checked}
                    onChange={(event) => { props.onChange(event.target.checked) }} />}
            />
        </div>
    )
}

import React from 'react';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function ToggleButton(props) {
    const MySwitch = withStyles({
        switchBase: {
          color: 'FFFFFF',
          '&$checked': {
            color: '#1FC49F',
          },
          '&$checked + $track': {
            backgroundColor: "#2becc2",
          },
        },
        checked: {},
        track: {},
      })(Switch);
    return (
        <div>
            <FormControlLabel
            label={props.title}
            labelPlacement="start"
                control={<MySwitch
                    checked={props.checked}
                    onChange={(event) => { props.onChange(event.target.checked) }} />}
            />
        </div>
    )
}

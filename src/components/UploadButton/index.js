import React from 'react';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { withStyles, makeStyles, } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(grey[500]),
        border: '1px solid grey',
        color: 'grey',
        padding: '15px 22px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline - block',
        fontSize: '16px',
        margin: '8px 2px',
        cursor: 'pointer',
        borderRadius: '10px',
        height: '54px',
    },
}))(Button);

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

export default function UploadButton(props) {
    const classes = useStyles();
    return (
        <ColorButton
            color="primary"
            component="label"
            className={classes.margin}
            startIcon={<CloudUploadIcon />}>
            Choose the image
            <input className="fileInput"
                type="file"
                hidden
                onChange={(e) => props.handleChange(e)} />
        </ColorButton>
    )
}

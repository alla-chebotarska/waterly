import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import SignInButton from '../SignInButton';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

export default function GuestSignIn(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const LogInAsGuest = () => {
        props.firebase.signInAnonymously();
        handleClose();
    }

    return (
        <div>
            <SignInButton 
            title={"Continue as a guest"} 
            backgroundColor={"#ffa31a"} 
            onClick={handleClickOpen}
            icon={<PermIdentityIcon/>} />
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Login as guest"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Data will not be stored in the cloud and will be lost when you log out or uninstall the program.
                        Please log in using other logit methods to take advantge of the cloud feature.
          </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={LogInAsGuest} color="primary" autoFocus>
                        Ok
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

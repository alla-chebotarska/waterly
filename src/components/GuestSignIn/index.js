import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';


export default function GuestSignIn(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const LogInAsGuest = () => {
        console.log("Lig in as guest");
        handleClose();
    }

    return (
        <>
            <button onClick={handleClickOpen}>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Login as guest"}</DialogTitle>
                    <DialogContent>Data will not be stored in the cloud and will be lost when you log out or uninstall the program.
                        Please log in using other logit methods to take advantge of the cloud feature.
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
          </Button>
                        <Button
                            onClick={() => LogInAsGuest()}
                            color="primary"
                            autoFocus>
                            Ok
          </Button>
                    </DialogActions>
                </Dialog>
                Continue as a guest
            </button>

        </>
    );
}

import React, { Fragment, useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';

const PaperComponent = props => {
    return (
        <Draggable>
            <Paper {...props} />
        </Draggable>
    );
};


const UpdateContactForm = props => {

    const { opened, mode } = props;
    const [dialogOpen, setDialogOpen] = useState(false);

    useEffect(() => {
        setDialogOpen(opened);
    }, []);

    const handleClose = () => {        
        setDialogOpen(false);
    };

    return (
        <Fragment>
            <Dialog
                open={dialogOpen}
                onClose={handleClose}
                PaperComponent={PaperComponent}
                aria-labelledby="contact-dialog">
        
                <DialogTitle id="contact-dialog">{mode} Contact</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Contact fields will go here
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
};


export default UpdateContactForm;
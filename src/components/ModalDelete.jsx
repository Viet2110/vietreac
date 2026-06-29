import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TextField } from '@mui/material';

export default function ModelDelete({ openEdit, handleCloseEdit, confirmDelete }) {
    return (
        <React.Fragment>
            <Dialog
                open={openEdit}
                onClose={handleCloseEdit}
                aria-describedby="alert-dialog-slide-description"
                role="alertdialog"
            >
                <DialogTitle>{"Model Delete"}</DialogTitle>
                <DialogContentText id="alert-dialog-slide-description">
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                </DialogContentText>
                <DialogActions>
                    <Button onClick={handleCloseEdit} autoFocus>
                        Cancel
                    </Button>
                    <Button onClick={confirmDelete}>Delete</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>

    );
}

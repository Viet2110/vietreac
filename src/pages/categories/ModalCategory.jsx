import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';

export default function ModalCategory({ open, handleClose, handleChangeInput, handleAdd, error,category }) {
    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                role="alertdialog"
            >
                <DialogTitle id="alert-dialog-title">
                    {category.id ? "Modal Edit Category" : "Modal Add Category"}
                </DialogTitle>
                <DialogContent>
                    <TextField
                    value={category.name}
                        error={!!error.name}
                        helperText={error.name}
                        onChange={handleChangeInput} name='name' fullWidth sx={{ mt: 2 }} id="outlined-basic" label="Name" variant="outlined" />
                    <TextField
                    value={category.description}
                        error={!!error.description}
                        helperText={error.description}
                        onChange={handleChangeInput} name='description' rows={2} multiline fullWidth sx={{ mt: 2 }} id="filled-basic" label="Discription" variant="outlined" />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Cancel
                    </Button>
                    <Button onClick={handleAdd}>{category.id ? "Update" : "Add"}</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

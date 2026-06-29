import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Autocomplete, TextField } from '@mui/material';
import { CategoryContext } from '../../contexts/CategoryProvider';
import { MdOutlineCloudUpload } from 'react-icons/md';
import styled from '@emotion/styled';


const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});
export default function ModalProduct({ open, handleClose, handleChangeInput, handleAdd, error, product ,handleImg }) {

    const { categories } = React.useContext(CategoryContext);
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
                    {product.id ? "Modal Edit Products" : "Modal Add Products"}
                </DialogTitle>
                <DialogContent>
                    <TextField
                        value={product.name}
                        error={!!error.name}
                        helperText={error.name}
                        onChange={handleChangeInput} name='name' fullWidth sx={{ mt: 2 }} id="outlined-basic" label="Name" variant="outlined" />
                    <TextField
                        value={product.price}
                        error={!!error.price}
                        helperText={error.price}
                        onChange={handleChangeInput} name='price' rows={2} multiline fullWidth sx={{ mt: 2 }} id="filled-basic" label="Price" variant="outlined" />
                    <Autocomplete
                        fullWidth
                        disablePortal
                        options={categories}
                        onChange={(event, newValue) => {
                                    // Cập nhật giá trị khi người dùng chọn
                                    handleChangeInput({
                                        target: { name: "category", value: newValue ? newValue.id : "" },
                                    });
                                }}
                        getOptionLabel={(option) => option.name}
                        sx={{ mt: 2 }}
                        renderInput={(params) => <TextField {...params} label="Movie" />}
                    />
                    <Button
                        sx={{ mt: 2, }}
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<MdOutlineCloudUpload />
                        }
                    >
                        Upload files
                        <VisuallyHiddenInput
                            type="file"
                            onChange={handleImg}
                        />
                    </Button>
                    <img src={product.imgUrl} alt="" />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Cancel
                    </Button>
                    <Button onClick={handleAdd}>{product.id ? "Update" : "Add"}</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

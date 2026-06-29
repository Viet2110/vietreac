import React, { use, useContext, useState } from 'react';
import Search from '../../components/Search';
import ModalCategory from './ModalCategory';
import TableCategory from './TableCategory';
import axios from 'axios';
import { CategoryContext } from '../../contexts/CategoryProvider';

const inner = { name: "", description: "" }
function Categories(props) {
    const [open, setOpen] = React.useState(false);
    const [category, setCategory] = useState(inner);
    const [error, setError] = useState(inner);
    const [search,setSearch] = useState("");
    const {  handleUpdate } = useContext(CategoryContext);

    const handleSearch = (e) => {
         setSearch(e.target.value);
    }

    const handleClickOpen = () => {
        setOpen(true);
        setError(inner);
        setCategory(inner);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleEdit = (category) => {
        handleClickOpen();
        setCategory(category);
    }

    const handleChangeInput = (e) => {
        setCategory({ ...category, [e.target.name]: e.target.value })
    }
    const handleAdd = async () => {
        if (validation()) {
            return;
        }
        if (category.id) {
            await axios.put(`https://6a34ec248248ee962fa5ceba.mockapi.io/Categories/${category.id}`, category);
        } else {
            await axios.post("https://6a34ec248248ee962fa5ceba.mockapi.io/Categories/", category);

        }
        handleClose();
        handleUpdate();
    }
    const validation = () => {
        const newError = {};
        newError.name = category.name ? "" : "Please enter your name";
        newError.description = category.description ? "" : "Please enter your description";
        setError(newError);
        return Object.values(newError).some(e => e !== ""); // true => co loi
    }
    return (
        <div>
            <Search title="Categories" handleSearch={handleSearch} handleClickOpen={handleClickOpen} />
            <ModalCategory category={category} error={error} handleAdd={handleAdd} open={open} handleClose={handleClose} handleChangeInput={handleChangeInput} />
            <TableCategory search={search}  handleEdit={handleEdit} />
        </div>
    );
}

export default Categories;
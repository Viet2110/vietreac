import React, { use, useContext, useState } from 'react';
import Search from '../../components/Search';
import axios from 'axios';
import ModalProduct from './ModalProduct';
import TableProduct from './TableProduct.jsx';
import { ProductContext } from '../../contexts/ProductProvider.jsx';
import LOGO from "../../assets/cafe.png";
import { uploadImageToCloudinary } from '../../config/Cloudinary.js';
const inner = { name: "", imgUrl: LOGO, price: "", category: "" }
function Products(props) {
    const [open, setOpen] = React.useState(false);
    const [product, setProduct] = useState(inner);
    const [error, setError] = useState(inner);
    const [search,setSearch] = useState("");
    const { handleUpdate } = useContext(ProductContext);

    const handleSearch = (i) =>{
        setSearch(i.target.value)
    }
    const handleClickOpen = () => {
        setOpen(true);
        setError(inner);
        setProduct(inner)
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleChangeInput = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }
    const handleEdit = (row) =>{
        handleClickOpen();
        setProduct(row)
    }
    const handleAdd = async () => {
        if (Validation()) {
            console.log(error);
            
            return;
        }

        const imgUrl = await uploadImageToCloudinary( product.imgUrl,"products");
     
        await axios.post("https://6a34ec248248ee962fa5ceba.mockapi.io/Products", {...product , imgUrl : imgUrl});
        handleClose();
        handleUpdate();
    }
    const Validation = () => {
        const newError = {};
        newError.name = product.name ? "" : "Please enter your name";
        newError.price = product.price ? "" : "Please enter your price";
        newError.category = product.category ? "" : "Please enter your category";
        setError(newError);
        return Object.values(newError).some(e => e !== ""); // true => co loi
    }
   const handleImg = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setProduct({ ...product, imgUrl: reader.result });
            };
            reader.readAsDataURL(file);
        }
    }

    return (
        <div>
            <Search title="Products" handleSearch={handleSearch} handleClickOpen={handleClickOpen} />
            <ModalProduct    handleImg={handleImg} product={product} error={error} handleAdd={handleAdd} open={open} handleClose={handleClose} handleChangeInput={handleChangeInput} />
            <TableProduct search={search} handleEdit={handleEdit} />
        </div>
    );
}

export default Products;
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios, { Axios } from 'axios';
import { createContext, use, useContext, useEffect, useMemo, useState } from 'react';
import { FaPencil } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';
import ModalDelete from '../../components/ModalDelete';
import PaginationDemo from '../../components/PaginationDemo';
import { ProductContext } from '../../contexts/ProductProvider';
import { CategoryContext } from '../../contexts/CategoryProvider';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

export default function TableProduct({ handleEdit, search }) {
    const [openDelete, setOpenDelete] = useState(false);
    const [idDelete, setIdDelete] = useState(null);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const { products, handleUpdate } = useContext(ProductContext);
    const {categories } = useContext(CategoryContext)

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const handleOpenDelete = () => {
        setOpenDelete(true);
    }
    const handleCloseDelete = () => {
        setOpenEdit(false);
    }
    const handleDeleted = (id) => {
        handleOpenDelete();
        setIdDelete(id);
    }
    const confirmDelete = async () => {
        await axios.delete(`https://6a34ec248248ee962fa5ceba.mockapi.io/Products/${editId}`);
        handleCloseDelete();
        handleUpdate();
    }

    const dataSearch = useMemo(() => {
        return products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
    }, [search, products])
    const dataPagination = useMemo(() => {
        return dataSearch.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    }, [page, dataSearch]);

    return (
        <div className="m-10">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell align="center">NAME PRODUCT</StyledTableCell>
                            <StyledTableCell align="center">IMG</StyledTableCell>
                            <StyledTableCell align="center">PRICE</StyledTableCell>
                            <StyledTableCell align="right">CATEGORY ID</StyledTableCell>
                            <StyledTableCell align="center">ACTION</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dataPagination.map((row, index) => (
                            <StyledTableRow key={index}>
                                <StyledTableCell component="th" scope="row">
                                    {page * rowsPerPage + index + 1}
                                </StyledTableCell>
                                <StyledTableCell align="center">{row.name}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <img src={row.imgUrl} className='w-20 h-10' alt="" />
                                </StyledTableCell>
                                <StyledTableCell align="center">{row.price}</StyledTableCell>
                                <StyledTableCell align="right">{
                                    categories.find(e => e.id == row.category)?.name
                                }</StyledTableCell>
                                <StyledTableCell align="center">
                                    <button onClick={() => handleEdit(row)} className='bg-blue-400 text-2xl text-white py-1 px-2 mr-3'><FaPencil /></button>
                                    <button onClick={() => handleDeleted(row.id)} className='bg-amber-400 text-2xl text-white py-1 px-2'><MdDelete /></button>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
                <PaginationDemo
                    page={page}
                    count={dataSearch.length}
                    handleChangePage={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    handleChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </TableContainer>
            <ModalDelete openDelete={openDelete} handleCloseDelete={handleCloseDelete} confirmDelete={confirmDelete} />
        </div>
    );
}

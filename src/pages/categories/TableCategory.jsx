import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FaPencil, FaPenClip } from "react-icons/fa6";
import { MdDelete } from 'react-icons/md';
import { useContext, useEffect, useMemo, useState } from 'react';
import axios, { Axios } from 'axios';
import ModelDelete from '../../components/ModalDelete';
import PaginationDemo from '../../components/PaginationDemo';
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



export default function TableCategory({ handleEdit , search }) {
    
    const [openDelete, setDelete] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const { categories , handleUpdate } = useContext(CategoryContext);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const handleClickOpenDelete = () => {
        setDelete(true);
    }
    const handleCloseDelete = () => {
        setDelete(false)
    }
  
    const handleDeleteId = (id) => {
        handleClickOpenDelete();
        setDeleteId(id);
    }
    const confirmDelete = async () => {
        await axios.delete(`https://6a34ec248248ee962fa5ceba.mockapi.io/Categories/${deleteId}`);
        handleCloseDelete();
        handleUpdate();
    }

    const dataSearch = useMemo(() => {
       return  categories.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    },[search , categories])

    const dataPagination = useMemo(() => {
        return dataSearch.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    }, [page, dataSearch]);
    return (
        <div className='p-3 border rounded-2xl m-1'>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell align="center">NAME</StyledTableCell>
                            <StyledTableCell align="left">DESCRIPTION</StyledTableCell>
                            <StyledTableCell align="center">ACTIONS</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dataPagination.map((row, index) => (
                            <StyledTableRow key={row.id} >
                                <StyledTableCell component="th" scope="row">
                                    {page * rowsPerPage + index + 1}
                                </StyledTableCell>
                                <StyledTableCell align="center">{row.name}</StyledTableCell>
                                <StyledTableCell align="left">{row.description}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <button onClick={() => handleEdit(row)} className='bg-blue-400 text-2xl text-white py-1 px-2 mr-3'><FaPencil /></button>
                                    <button onClick={() => handleDeleteId(row.id)} className='bg-amber-400 text-2xl text-white py-1 px-2'><MdDelete /></button>
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
            <ModelDelete openDelete={openDelete} handleCloseDelete={handleCloseDelete} confirmDelete={confirmDelete} />
        </div>

    );
}

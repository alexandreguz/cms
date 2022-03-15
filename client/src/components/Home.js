import react from 'react';
import { useEffect, useState } from "react";

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Home = (props) => {

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

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/customers')
            .then(res => res.json())
            .then(data => {
                setCustomers(data);
            })
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align='center' >First Name</StyledTableCell>
                        <StyledTableCell align='center'>Last Name</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {customers.map((customer) => (
                        <StyledTableRow key={customer.id}>
                            <StyledTableCell align='center'>{customer.firstName}</StyledTableCell>
                            <StyledTableCell align='center'>{customer.lastName}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Home
import React from 'react';
import {TableCell, TableRow} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import {useDispatch} from "react-redux";
import {setSelectedUser} from "../redux/users/usersSlice";

const UserRow = ({data, isSelected}) => {
    const dispatch = useDispatch()
    const handleSelectUser = (id) => dispatch(setSelectedUser(id))
    return (
        <TableRow>
            <TableCell> <Checkbox checked={isSelected} onClick={()=>handleSelectUser(data._id)}/></TableCell>
            <TableCell align="center">{data.name}</TableCell>
            <TableCell align="center">{data.username}</TableCell>
            <TableCell align="center">{data.registrationDate?.split(".")[0].replace("T",' ')}</TableCell>
            <TableCell align="center">{data.status ? "Опублікований" : 'Не Опублікований'}</TableCell>
            <TableCell align="center">{data.role}</TableCell>
        </TableRow>
    );
};

export default UserRow;
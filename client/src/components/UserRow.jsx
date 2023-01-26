import React, {useEffect, useState} from 'react';
import {TableCell, TableRow} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import {useDispatch} from "react-redux";
import {setSelectedUser} from "../redux/users/usersSlice";
import {useFindTeamByIdMutation} from "../redux/teams/teamsApiSlice";

const UserRow = ({data, isSelected}) => {
    const dispatch = useDispatch()
    const handleSelectUser = (id) => dispatch(setSelectedUser(id))
    const [team, setTeam] = useState('-')
    const [findTeamById] = useFindTeamByIdMutation()
    useEffect(()=>{
        const getTeam = async ()=>{
            if(data.teamId!=='0'){
                console.log(data.teamId)
                const res = await findTeamById({id:data.teamId})
                setTeam(res.data.teams.name)
                console.log(res)
            }

        }
        getTeam()
    },[])
    return (
        <TableRow>
            <TableCell> <Checkbox checked={isSelected} onClick={()=>handleSelectUser(data._id)}/></TableCell>
            <TableCell align="center">{data.name}</TableCell>
            <TableCell align="center">{data.username}</TableCell>
            <TableCell align="center">{data.registrationDate?.split(".")[0].replace("T",' ')}</TableCell>
            <TableCell align="center">{data.status ? "Опублікований" : 'Не Опублікований'}</TableCell>
            <TableCell align="center">{data.role}</TableCell>
            <TableCell align="center">{team}</TableCell>
        </TableRow>
    );
};

export default UserRow;
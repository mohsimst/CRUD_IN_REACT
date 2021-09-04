import React, { useEffect, useState } from 'react'
import { Button, TableCell, TableRow, Table, TableHead, TableBody, makeStyles } from '@material-ui/core';
import { getUsers, deleteUserData } from '../service/api';
import {Link} from 'react-router-dom';

const useStyle = makeStyles({
    thead: {
        backgroundColor:'#218c74',
    '& > *' : {
       fontFamily:  '"Segoe UI"',
       fontSize:18,
       fontWeight:600,
       color:'#fff'
    }
    },
    tbody: {
       '& > *':{
       
       fontFamily: 'sans-serif',
       fontSize:15,
       fontWeight:500
    }
    }
})
function AllUser() {
    const classes = useStyle();
    const [users, setusers] = useState([]);
    const { name, username, email,phone } = users;

    useEffect(() => {
      getAllUsers();
      console.log(users);
    }, []);
    
    const getAllUsers = async() => {
        const response = await getUsers();
        setusers(response.data);
        // console.log(response);
        console.log(response.data);
      }
      
    const deleteUser = async(id) => {
        await deleteUserData(id);
        getAllUsers();
    }
    
    return (
        <Table style={{marginTop:30}}>
        <TableHead>
            <TableRow className={classes.thead}>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell></TableCell>
            </TableRow>
        </TableHead>
        <TableBody >
            {
              users.map(user => (
               <TableRow className={classes.tbody}>
                   <TableCell >{user.id}</TableCell>
                   <TableCell>{user.name}</TableCell>
                   <TableCell>{user.email}</TableCell>
                   <TableCell>{user.username}</TableCell>
                   <TableCell>{user.phone}</TableCell>
                   <Button variant="contained" color="primary" component={Link} to={`/edit/${user.id}`} style={{margin:'8px 10px 0 0'}}>Edit</Button>
                   <Button variant="contained" color="secondary" onClick={() => deleteUser(user.id)} style={{margin:'7px 0px 0 0'}}>Delete</Button>
               </TableRow>
              ))
            }
        </TableBody>
    </Table>
    )
}

export default AllUser;

import { FormControl, FormGroup, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { SubmitUser } from '../service/api';
import {useHistory} from 'react-router-dom';

const useStyle = makeStyles({
    container:{
        width:'50%',
        margin:'0 auto',
        paddingTop:40,
        '& > *': {
        fontFamily:  '"Segoe UI"',
            marginBottom:15
        }
    },
    button:{
        width:'30%',
        padding:'10px 0',
        fontFamily:  '"Segoe UI"',
        fontWeight:500,
        backgroundColor:'#706fd3',
        margin:'12px auto 0 auto',
        color:'#fff'
    }
})

const InitialValue = {
    name:"",
    email:"",
    username:"",
    phone:""
}

function AddUser() {

   
    const history = useHistory();
    const classes = useStyle();
    const [inputValue, setinputValue] = useState(InitialValue)
    

  
    const addUserDetails = (e) => {
        setinputValue({...inputValue, [e.target.name]: e.target.value});
        console.log(inputValue);
    }
    const SubmitUsers = async() => {
       await SubmitUser(inputValue);
        history.push('/all')
    }

    return (
        <>
        <FormGroup className={classes.container}>
        <Typography variant="h5" style={{textAlign:'center', backgroundColor:'#706fd3', color:'#fff', width:'40%', padding:'10px 0',borderRadius:5, margin:'0 auto 20px auto'}}>Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=> addUserDetails(e)} name="name"/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel> 
                <Input onChange={(e)=> addUserDetails(e)} name="email"/>
            </FormControl><FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e)=> addUserDetails(e)} name="username"/>
            </FormControl><FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=> addUserDetails(e)} name="phone"/>
            </FormControl>
            <Button variant="contained" onClick={(inputValue) => SubmitUsers(inputValue)} className={classes.button}>Add User</Button>
        </FormGroup>
        </>
    )
}

export default AddUser;

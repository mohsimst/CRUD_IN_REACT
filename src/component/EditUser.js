import { FormControl, FormGroup, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { getUsers, SubmitUser, EditsUser } from '../service/api';
import {useHistory, useParams} from 'react-router-dom';

const useStyle = makeStyles({
    container:{
        width:'50%',
        margin:'0 auto',
        paddingTop:40,
        '& > *': {
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


function EditUser() {
    const history = useHistory();
    const classes = useStyle();
    const [inputValue, setinputValue] = useState(InitialValue);
    const { name,username, email, phone} = inputValue;

    const { id } = useParams();
    
    useEffect(() => {
      loadUserData();
    },[])

    const loadUserData = async() => {
        const response = await getUsers(id);
        console.log(response.data)
        setinputValue(response.data);
    }

    const addUserDetails = (e) => {
        setinputValue({...inputValue, [e.target.name]: e.target.value});
        console.log(inputValue);
    }
    const EditUsers = async() => {
        console.log(inputValue)
         await EditsUser(id,inputValue);
        history.push('/all')
    }

    return (
        <>
        <FormGroup className={classes.container}>
        <Typography variant="h5" style={{textAlign:'center', backgroundColor:'#706fd3', color:'#fff', width:'40%', padding:'10px 0',borderRadius:5, margin:'0 auto 20px auto'}}>Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=> addUserDetails(e)} name="name" value={name}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel> 
                <Input onChange={(e)=> addUserDetails(e)} name="email" value={email}/>
            </FormControl><FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e)=> addUserDetails(e)} name="username" value={username}/>
            </FormControl><FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=> addUserDetails(e)} name="phone" value={phone}/>
            </FormControl>
            <Button variant="contained" onClick={(inputValue) => EditUsers(inputValue)} className={classes.button}>Save User</Button>
        </FormGroup>
        </>
    )
}

export default EditUser;

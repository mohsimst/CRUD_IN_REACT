import React from 'react';
import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import Home from './Home';
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles({
    container:{
        position:'static',
        backgroundColor:'#40407a',
        color:'red'
    },
    link:{
        fontSize:20,
        '& > *':{
        color:'#ffffff',
        marginRight:30,
        textDecoration:'none',
         },
    }
})

function Navbar() {
    const classes = useStyle()
    return (
        <AppBar className={classes.container}>
          <Toolbar className={classes.link}>
            <NavLink exact to='/'>
                Home
            </NavLink>
            <NavLink exact to='/add'>
                AddUser
            </NavLink>
           <NavLink exact to='/all' >
                 AllUser
            </NavLink>
           </Toolbar>
        </AppBar>
    )
}

export default Navbar;

import React from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
    container:{
        marginTop:'20px'
    },
    left: {
        width:'20%',
        padding:10,
        backgroundColor:"#34ace0"
    },
    right: {
        width:'80%',
        padding:10,
        backgroundColor:'#33d9b2'
    }
})


function Home() {
    const classes = useStyle()
    return (
     <>
     <Box className={classes.container} >
        <Typography variant="h4" style={{marginBottom:'20px'}}>Home</Typography>
        <Box style={{display:'flex', width:'100%'}}>
             <Box className={classes.left}>
                <Typography variant="h5">CRUD OPERATION</Typography>
             </Box>
             <Box className={classes.right}>
             <Typography >USING REACT APP, REACT-ROUTER-DOM, Hooks(useEffect, useState), MATERIAL-UI, AXIOS, JSON-SERVER, CONCURRENTLY</Typography>
             </Box>
        </Box>
      </Box>
     </>
    )
}

export default Home;

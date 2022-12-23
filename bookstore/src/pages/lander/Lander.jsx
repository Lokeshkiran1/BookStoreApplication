import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import SignUp from "../../components/signup/SignUp";
import SignIn from "../../components/signin/SignIn";
import { useState } from "react";

const useStyles=makeStyles({
    mainContainer:{
        width:'100vw',
        height:'100vh',
        backgroundColor:'#A8A8A8',
        zIndex:-1
    },
    container1:{
        width:'40%',
        height:'50%',
        backgroundColor:'#F5F5F5',
        position:'absolute',
        top:"180px",
        left:'320px',
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        borderRadius:'20px'
    },
    image:{
        border:'0px solid red',
        width:'30%',
        height:'50%',
        position:'absolute',
        left:'100px',
        

    },
    image1:{
        width:'100%',
        height:'100%',
        position:'absolute',
        right:'40px',
        bottom:'30px',
        borderRadius:'100px',
        zIndex:'1'
    },
    image2:{
        width:'30%',
        height:'20%',
        borderRadius:'100px',
        position:'absolute',
        left:'70px',
        zIndex:'1'
    },
    text:{
        position:'absolute',
        left:'40px',
        top:'240px',
        fontWeight:'bold'
    }
})
function Lander(){
    const classes=useStyles();
    const[toggle,setToggle]=useState(false)
    const listenToSignIn=()=>{
        setToggle(true)
    }
    const listenToSignUp=()=>{
        setToggle(false)
    }
    return(
        <Box className={classes.mainContainer}>
            <Box className={classes.container1}>
                <Box className={classes.image}>
                    <img className={classes.image1} src='image1.png'/>
                        <img className={classes.image2} src='images2.jpeg'/>
                    
                </Box>
                <Box className={classes.text}>ONLINE BOOK SHOPPING</Box>
            </Box>
            <div>
                {
                    toggle ? <SignUp listenToSignUp={listenToSignUp} />:<SignIn listenToSignIn={listenToSignIn} />
                }
            </div>
        </Box>
    )
}
export default Lander;
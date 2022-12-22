
import { Box, Button, Divider, Paper, TextField } from "@mui/material";
import React from "react";
import {makeStyles} from '@mui/styles';

const useStyles=makeStyles({
    signinpaper:{
        width:'20vw',
        height:'50vh',
        backgroundColor:'#FFFFFF',
        position:'relative',
        top:'150px',
        left:'600px',
        borderRadius:'8px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    signincontainer:{
        border:'0px solid red',
        width:'75%',
        height:'90%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    },
    mainbuttons:{
        border:'0px solid blue',
        width:'100%',
        height:'20%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    signinbutton:{
        fontSize:'16px !important',
        fontWeight:'bold !important',
        color:'#0A0102 !Important',
        fontFamily:'Roboto',
        height:'40px'
    },
    signupbutton:{
        border:'0px solid black',
        fontSize:'16px !important',
        fontWeight:'bold !important',
        color:'#878787 !Important',
        fontFamily:'Roboto',
        height:'40px'
    },
    signinforms:{
        border:'0px solid green',
        width:'100%',
        height:'80%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between'
    },
    textfields:{
        textAlign:'left',
        fontSize:'10px',
        color:'#0A0102'
    },
    forgotpassword:{
        fontSize:'8px !important',
        color:'#0A0102 !important',
        height:'10px',
        position:'relative',
        left:'107px'
    },
    loginbutton:{
        width:'100%',
        height:'80%',
        color:'#A03037',
        textTransform: "none !important"
    },
    dividertext:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        fontWeight:'bold'
    },
    fandg:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    // facebook:{
    //     width:'40%',
    //     height:'100%',
    //     border:'1px solid yellow'
    // },
    facebookbutton:{
        width:'40%',
        height:'80%',
        color:'#A03037',
        textTransform: "none !important"
    },
    googlebutton:{
        width:'40%',
        height:'80%',
        color:'##F5F5F5',
        textTransform: "none !important"
    }


})
function SignIn(){
    const classes=useStyles();
    return(
        <Paper elevation={3} className={classes.signinpaper}>
            <Box className={classes.signincontainer}>
                <Box className={classes.mainbuttons}>
                    <Button className={classes.signinbutton}>SIGNIN</Button>
                    <Button className={classes.signupbutton}>SIGNUP</Button>
                </Box>
                <Box className={classes.signinforms}>
                    <Box className={classes.textfields}>
                        <span>Email id</span>
                        <TextField className={classes.emailtext} variant='outlined' size="small" />
                    </Box>
                    <Box className={classes.textfields}>
                        <span>Password</span>
                        <TextField className={classes.passwordtext} variant='outlined' size="small" />
                        <Button className={classes.forgotpassword} variant='text'>forgot password?</Button>
                    </Box>
                    <Box>
                        <Button className={classes.loginbutton} variant='contained'>Login</Button>
                    </Box>
                    <Box className={classes.dividertext}>
                        <Divider sx={{borderBottomWidth:3,width:'30%'}}/>OR<Divider sx={{borderBottomWidth:3,width:'30%'}}/>
                    </Box>
                    <Box className={classes.fandg}>
                        {/* <Box className={classes.facebook}> */}
                            <Button className={classes.facebookbutton} variant='contained' >facebook</Button>
                        {/* </Box> */}
                        {/* <Box className={classes.google}> */}
                            <Button className={classes.googlebutton} variant='outlined' disabled>google</Button>
                        {/* </Box> */}
                    </Box>
                </Box>
            </Box>
        </Paper>
    )
}
export default SignIn;
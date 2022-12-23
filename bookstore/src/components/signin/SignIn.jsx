
import { Box, Button, Divider, Paper, TextField } from "@mui/material";
import React,{useState} from "react";
import {makeStyles} from '@mui/styles';
import { loginAPI } from "../../services/UserService";
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

const useStyles=makeStyles({
    signinpaper:{
        width:'20vw',
        height:'60vh',
        backgroundColor:'#FFFFFF',
        position:'relative',
        top:'145px',
        left:'600px',
        borderRadius:'20px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        zIndex:10
    },
    signincontainer:{
        border:'0px solid red',
        width:'75%',
        height:'98%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    },
    mainbuttons:{
        border:'0px solid blue',
        width:'100%',
        height:'10%',
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
function SignIn(props){
    const openSignUp=()=>{
        props.listenToSignIn()
    }
    const [signInObj,setSignInObj]=useState({email:"",password:""});
    const [regexObj,setRegexObj]=useState({emailBorder:false,emailHelper:"",passwordBorder:false,passwordHelper:""});
    const classes=useStyles();
    const takeEmail=(event)=>{
        setSignInObj(prevState=>({
            ...prevState,
            email:event.target.value
        }))
    }
    const takePassword=(event)=>{
        setSignInObj(prevState=>({
            ...prevState,
            password:event.target.value
        }))
    }
    const submit=()=>{
        let emailTest=emailRegex.test(signInObj.email);
        let passwordTest=passwordRegex.test(signInObj.password);
        if(emailTest===false){
            setRegexObj(prevState=>({
                ...prevState,
                emailBorder:true,
                emailHelper:"Enter valid Email"
            }))
        }
        else if (emailTest===true){
            setRegexObj(prevState=>({
                ...prevState,
                emailBorder:false,
                emailHelper:""
            }))
        }
        if(passwordTest===false){
            setRegexObj(prevState=>({
                ...prevState,
                passwordBorder:true,
                passwordHelper:"Enter valid Password"
            }))
        }
        else if (passwordTest===true){
            setRegexObj(prevState=>({
                ...prevState,
                passwordBorder:false,
                passwordHelper:""
            }))
        }
        if(emailTest===true && passwordTest===true){
            loginAPI(signInObj).then(response=>{
                console.log(response);
                localStorage.setItem('token',response.data.data)
               // navigate('/dashboard')
            }).catch(error=>{
                console.log(error);
            })
        }
        
    }
    return(
        <Paper elevation={5} className={classes.signinpaper}>
            <Box className={classes.signincontainer}>
                <Box className={classes.mainbuttons}>
                    <Button className={classes.signinbutton} >SIGNIN</Button>
                    <Button className={classes.signupbutton} onClick={openSignUp}>SIGNUP</Button>
                </Box>
                <Box className={classes.signinforms}>
                    <Box className={classes.textfields}>
                        <span>Email id</span>
                        <TextField className={classes.emailtext} variant='outlined' size="small" onChange={takeEmail} error={regexObj.emailBorder} helperText={regexObj.emailHelper} />
                    </Box>
                    <Box className={classes.textfields}>
                        <span>Password</span>
                        <TextField className={classes.passwordtext} variant='outlined' size="small" onChange={takePassword} error={regexObj.passwordBorder} helperText={regexObj.passwordHelper}/>
                        <Button className={classes.forgotpassword} variant='text'>forgot password?</Button>
                    </Box>
                    <Box>
                        <Button className={classes.loginbutton} variant='contained' onClick={submit}>Login</Button>
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
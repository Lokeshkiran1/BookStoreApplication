import React,{useState} from "react";
import {makeStyles} from '@mui/styles';
import { Paper,Box,Button,TextField} from "@mui/material";
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const mobileNumberRegex=/^([0-9]){10}/;
const fullNameRegex=/^[a-zA-Z][a-zA-Z\\s]+$/;


const useStyles=makeStyles({
    signuppaper:{
        width:'20vw',
        height:'60vh',
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
        height:'90%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between'
    },
    textfields:{
        textAlign:'left',
        fontSize:'10px',
        color:'#0A0102'
    },
    signupbuttonsubmit:{
        width:'100%',
        height:'80%',
        color:'#A03037',
        textTransform: "none !important"
    },
});
function SignUp(){
    const classes=useStyles();
    const [signInObj,setSignInObj]=useState({email:"",password:"",fullName:"",mobileNumber:""});
    const [regexObj,setRegexObj]=useState({emailBorder:false,emailHelper:"",passwordBorder:false,passwordHelper:"",fullNameBorder:false,fullNameHelper:"",mobileNumberBorder:false,mobileNumberHelper:""});
    const takeEmail=(event)=>{
        // setSignInObj({EmailID:event.target.value})
        setSignInObj(prevState=>({
            ...prevState,
            email:event.target.value
        }))
    }
    const takePassword=(event)=>{
        // setSignInObj({Password:event.target.value})
        setSignInObj(prevState=>({
            ...prevState,
            password:event.target.value
        }))
    }
    const takeFullName=(event)=>{
      // setSignInObj({Password:event.target.value})
      setSignInObj(prevState=>({
          ...prevState,
          fullName:event.target.value
      }))
  }
  const takeMobileNumber=(event)=>{
    // setSignInObj({Password:event.target.value})
    setSignInObj(prevState=>({
        ...prevState,
        mobileNumber:event.target.value
    }))
}
    const submit=()=>{
        let emailTest=emailRegex.test(signInObj.email);
        let passwordTest=passwordRegex.test(signInObj.password);
        let fullNameTest=fullNameRegex.test(signInObj.fullName);
        let mobileNumberTest=mobileNumberRegex.test(signInObj.mobileNumber);
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
        if(fullNameTest===false){
          setRegexObj(prevState=>({
              ...prevState,
              fullNameBorder:true,
              fullNameHelper:"Enter valid full name"
          }))
        }
      else if (fullNameTest===true){
          setRegexObj(prevState=>({
              ...prevState,
              fullNameBorder:false,
              fullNameHelper:""
          }))
        }
      if(mobileNumberTest===false){
            setRegexObj(prevState=>({
                ...prevState,
                mobileNumberBorder:true,
                mobileNumberHelper:"Enter valid mobile number"
            }))
        }
        else if (mobileNumberTest===true){
            setRegexObj(prevState=>({
                ...prevState,
                mobileNumberBorder:false,
                mobileNumberHelper:""
            }))
        }
        if(emailTest===true && passwordTest===true && fullNameTest===true && mobileNumberTest===true){
            // loginAPI(signInObj).then(response=>{
            //     console.log(response);
            //     localStorage.setItem('token',response.data.data)
            //     navigate('/dashboard')
            // }).catch(error=>{
            //     console.log(error);
            // })
        }
    }
    return(
        <Paper elevation={3} className={classes.signuppaper}>
            <Box className={classes.signincontainer}>
                <Box className={classes.mainbuttons}>
                    <Button className={classes.signinbutton}>SIGNIN</Button>
                    <Button className={classes.signupbutton}>SIGNUP</Button>
                </Box>
                <Box className={classes.signinforms}>
                    <Box className={classes.textfields}>
                        <span>Full Name</span>
                        <TextField className={classes.nametext} variant='outlined' size="small" onChange={takeFullName} error={regexObj.fullNameBorder} helperText={regexObj.fullNameHelper} />
                    </Box>
                    <Box className={classes.textfields}>
                        <span>Email id</span>
                        <TextField className={classes.emailtext} variant='outlined' size="small" onChange={takeEmail} error={regexObj.emailBorder} helperText={regexObj.emailHelper}/>
                    </Box>
                    <Box className={classes.textfields}>
                        <span>Password</span>
                        <TextField className={classes.passwordtext} variant='outlined' size="small" onChange={takePassword} error={regexObj.passwordBorder} helperText={regexObj.passwordHelper}/>
                    </Box>
                    <Box className={classes.textfields}>
                        <span>Mobile Number</span>
                        <TextField className={classes.mobiletext} variant='outlined' size="small" onChange={takeMobileNumber} error={regexObj.mobileNumberBorder} helperText={regexObj.mobileNumberHelper} />
                    </Box>
                    <Box>
                        <Button className={classes.signupbuttonsubmit} variant='contained' onClick={submit}>Signup</Button>
                    </Box>
                </Box>
            </Box>
        </Paper>
    )
}
export default SignUp;
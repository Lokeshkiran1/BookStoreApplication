import React from "react";

import { makeStyles } from "@mui/styles";
import { Card,Box, Button, TextField, OutlinedInput, FormControlLabel, Radio } from "@mui/material";
import { useState } from "react";
import { addCustomer } from "../../services/CustomerService";

const useStyles=makeStyles({
    mainCard:{
        width:'60vw',
        height:'90vh',
        border:'1px solid #DBDBDB',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
        right:'0px',
        marginTop:'20px'
    },
    mainContainer:{
        border: '0px solid red',
        width: '88%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    mainHeading:{
        border:'0px solid blue',
        width:'100%',
        height:'10%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    addNewAddress:{
        color:'#A03037',
    },
    customerDetails:{
        fontWeight:'500'
    },
    text1:{
        border:'0px solid green',
        width:'80%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    text2:{
        width:'100%',
        height:'16%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    textcd:{
        textAlign:'left',
        fontSize:'12px',
    },
    addType:{
        fontWeight:'500',
        position:'relative',
        top:'10px',
        right:'264px'
    },
    addressdetail:{
        width:'100%',
        height:'20%',
        textAlign:'left',
        fontSize:'12px',
        border:'0px solid red',
        position:'relative',
        top:"20px"
    },
    address:{
        width:'100%',
        height:'80%'
    },
    text22:{
        width:'100%',
        height:'16%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        position:'relative',
        top:"20px"
    },
    textcd22:{
        display:'flex',
        flexDirection:'column',
        textAlign:'left',
        fontSize:'12px',
    },
    continue:{
        position:'relative',
        left:'315px',
        top:'30px'
    },
    radiobutton1:{
        fontWeight:'500',
        marginTop:'8px'
    },
    radio:{
        border:'0px solid blue',
        marginLeft:'50px'
    }
})

const CustomerDetails=(props)=>{
    const classes=useStyles();
    const[details,setDetails]=useState(false);
    const [customerDetails,setCustomerDetails]=useState({addressType:'',fullAddress:'',city:'',state:''});

    const openSummary=()=>{
        addCustomer(customerDetails).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
        props.openOrderSummary();
        setDetails(true);

    }
    const takeAddress=(event)=>{
        setCustomerDetails({
            ...customerDetails,
            fullAddress:event.target.value
        })
    }
    const takeCity=(event)=>{
        setCustomerDetails({
            ...customerDetails,
            city:event.target.value
        })
    }
    const takeState=(event)=>{
        setCustomerDetails({
            ...customerDetails,
            state:event.target.value
        })
    }
    const takeAddressType=(event)=>{
        setCustomerDetails({
            ...customerDetails,
            addressType:event.target.value
        })
    }
    return(
        <div>
            <Card className={classes.mainCard}>
                <Box className={classes.mainContainer}>
                    <Box className={classes.mainHeading}>
                        <Box className={classes.customerDetails}>
                            Customer Details
                        </Box>
                        <Box className={classes.addNewAddress}>
                            <Button variant='outlined' sx={{border:'1px solid #A03037',color:'#A03037',textTransform:'none'}}>Add new Address</Button>
                        </Box>
                    </Box>
                    <Box className={classes.text1}>
                        <Box className={classes.text2}>
                            <Box className={classes.textcd}>
                                <span>Full Name</span>
                                <TextField variant="outlined" size='small' />
                            </Box>
                            <Box className={classes.textcd}>
                                <span>Mobile Number</span>
                                <TextField variant="outlined" size='small' />
                            </Box>
                        </Box>
                        
                        <Box className={classes.addressdetail}>
                            <Box className={classes.address}>
                                    <span>Address</span>
                                    <OutlinedInput variant="outlined" onChange={takeAddress} size='small' sx={{ width: '100%',height:'100% !important'}} />
                            </Box>
                        </Box>
                        <Box className={classes.text22}>
                                <Box className={classes.textcd22}>
                                    <span>city</span>
                                    <TextField variant="outlined" size='small' onChange={takeCity} />
                                </Box>
                                <Box className={classes.textcd22}>
                                    <span>State</span>
                                    <TextField variant="outlined" size='small' onChange={takeState}/>
                                </Box>
                        </Box>
                        <Box className={classes.radiobuttons} sx={{ display: 'flex', flexDirection: 'row',position:'relative',right:'110px'}}  >
                                <span className={classes.radiobutton1} >Type :</span>
                                <Box className={classes.radio} onChange={takeAddressType}>
                                    <FormControlLabel value="Home" name='Type' control={<Radio />} label="Home"  />
                                    <FormControlLabel value="Office" name='Type' control={<Radio />} label="Office" />
                                    <FormControlLabel value="other" name='Type' control={<Radio />} label="Other" />
                                </Box>
                        </Box>
                       
                        <Box className={classes.continue}>
                            {
                                details?null:
                                <Button variant='contained' onClick={openSummary}>Continue</Button>
                            }
                        </Box>
                    </Box>
                    
                </Box>
            </Card>
        </div>
    )
}
export default CustomerDetails;
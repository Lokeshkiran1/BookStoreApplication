import React from 'react';

import { makeStyles } from "@mui/styles";
import { Box, Button, Paper } from '@mui/material';
import Header from '../header/Header';
import { useNavigate } from "react-router-dom";


const useStyles=makeStyles({
    container:{
        width:'100vw',
        height:'80vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    mainContainer:{
        width:'60%',
        height:'100%',
        border:'0px solid red',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center'
    },
    logo:{
        width:'40%',
        height:'40%',
        margin:'2%'
    },
    text:{
        width:'45%',
        fontSize:'16px',
        fontWeight:'500',
        color:'#333232'
    },
    table:{
        width:'100%',
        height:'25%',
        border:'1px solid #DCDCDC',
        display:'flex',
        flexDirection:'column'
    },
    row1: {
        width: '100%',
        height: '30%',
        borderBottom: '1px solid #DCDCDC',
        display: 'flex',
        alignItems: 'center',
        color: '#333232',
        fontWeight: '500',
        backgroundColor: '#FAFAFA',
    },
    txt1: {
        width: '30%',
    },
    txt2: {
        width: '30%',
    },
    txt3: {
        width: '40%',
    },
    row2: {
        width: '100%',
        height: '60%',
        display: 'flex',
        color: '#333232',
        fontSize: '14px',
        fontFamily: 'calibri'
    },
    row2txt1: {
        width: '30%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRight: '1px solid #DCDCDC',
    },
    row2txt2: {
        width: '30%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRight: '1px solid #DCDCDC',
    },
    row2txt3: {
        width: '40%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    row2txt: {
        width: '90%',
        height: '75%',
        border: '0px solid red'
    },
    orderbutton:{
        width:'100%',
    }
})
const OrderSuccess=()=>{
    const classes=useStyles();
    const navigate=useNavigate();
    const orderSuccess=()=>{
        navigate('/dashboard')
    }
    return(
        <div>
            <Box>
                <Header />
                <Box className={classes.container}>
                    <Box className={classes.mainContainer}>
                        <Box className={classes.logo}>
                            <img src='orderplaced.jpeg' style={{width:'100%',height:'100%'}} />
                        </Box>
                        <Box className={classes.text}>
                            <Box>hurry!!! your order is confirmed<br />the order id is #abc save the order id for<br />further communication...</Box>
                        </Box>
                        <Paper elevation={1} className={classes.table}>
                            <Box className={classes.row1}>
                                <Box className={classes.txt1}>Email us</Box>
                                <Box className={classes.txt2}>Contact us</Box>
                                <Box className={classes.txt3}>Address</Box>
                            </Box>
                            <Box className={classes.row2}>
                                <Box className={classes.row2txt1}><Box className={classes.spaceOS}>abc@bookstore.com</Box></Box>
                                <Box className={classes.row2txt2}><Box className={classes.spaceOS}>+91 9999988888</Box></Box>
                                <Box className={classes.row2txt3}>
                                    <Box className={classes.row2txt} sx={{ textAlign: 'left' }}>58, 8th cross, 2nd main, sarjapur road, sector house in board, landmark eagle tower, rajaji nagar, Banglore 573001</Box>
                                </Box>
                            </Box>
                        </Paper>
                        <Box className={classes.orderbutton}>
                            <Button variant='contained' sx={{backgroundColor: '#3371B5', width: '24%'}} onClick={orderSuccess}
                            >Continue Shopping</Button>
                    </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}
export default OrderSuccess;
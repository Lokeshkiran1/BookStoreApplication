import React from "react";

import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { addToBag, removeFromBag } from "../../services/CartService";

const useStyles=makeStyles({
    counterButtons:{
        position:'relative',
        left:'25px',
        border:'0px solid red',
        width:'20%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    decrement:{
    },
    count:{
        border:'1px solid #DBDBDB',
        width:'100% !important'
    },
    increment:{
    }
})

const Counter=(props)=>{
    const classes=useStyles();
    const incrementItemCart=()=>{
        let bookId=props.inputObj.productId
        console.log("from counter cart:",bookId)
        addToBag(bookId).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }
    const removeItemCart=()=>{
        let bookId=props.inputObj.productId
        console.log("from counter remove to cart:",bookId)
        removeFromBag(bookId).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }
    return(
        <div>
            <div className={classes.counterButtons}>
                <Button className={classes.decrement}style={{color:'#DBDBDB',padding:'0px',minWidth:'50px'}} onClick={removeItemCart}><RemoveCircleOutlineOutlinedIcon /></Button>
                <div className={classes.count}>{props.inputObj.quantity}</div>
                <Button className={classes.increment} style={{color:'#DBDBDB',padding:'0px',minWidth:'50px'}} onClick={incrementItemCart}><AddCircleOutlineOutlinedIcon /></Button>
            </div>
        </div>
    )
}
export default Counter;
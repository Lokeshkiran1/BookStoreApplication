import React from "react";

import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import Header from "../header/Header";
import { useEffect } from "react";
import { getAllWishList, removeFromWishList } from "../../services/WishlistService";
import { useState } from "react";
import { Buffer } from "buffer";
import { DeleteOutlined } from "@mui/icons-material";

const useStyles=makeStyles({
    cartHeader:{
        width:'60vw',
        height:'10vh',
        border:'0px solid red',
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        position:'relative',
        left:'190px'
     },
     homeText:{
        color: '#9D9D9D',
        fontSize: '16px',
     },
     cartText:{
        color: '#0A0102',
        fontSize: '16px',
        fontWeight:'500',
        position:'relative',
        left:'8px'
     },
     container:{
        width:'60vw',
        height:'auto',
        border:'1px solid #E4E4E4',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        position:'relative',
        left:'250px'
     },
     main:{
        width:'100%',
        height:'7vh',
        backgroundColor:'#F5F5F5',
        display:'flex',
        alignItems:'center'
     },
     details:{
        color: '#0A0102',
        fontSize: '18px',
        fontWeight:'500',
        textAlign:'left',
        position:'relative',
        left:'40px'
    },
    mainWishList:{
        width:'100%',
        height:'25vh',
        border:'1px solid #E4E4E4',
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    textcart:{
        width:'100%',
        height:'15vh',
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        position:'relative',
        left:'40px'
    },
    container2:{
        width:'60%',
        height:'100%',
        border:'0px solid red',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'flex-start',
        marginLeft:'30px'
    },
    bookTitle:{
        fontSize:'20px',
        fontWeight:'bold',
    },
    bookAuthor:{
        fontSize:'14px',
        color:'#878787'
    },
    bookPrice:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        border:'0px solid red',
        width:'110px',
        alignItems:'center'
 
     },
     discountPrice:{
         fontSize:'16px',
         fontWeight:'bold',
     },
     mPrice:{
         fontSize:'14px',
         color:'#878787',
         textDecorationLine:'line-through'
     },
     deletewishlist:{
        border:'0px solid red',
        position:'relative',
        right:'50px',
        bottom:'35px'
     },
     footer:{
        width:'100vw',
        height:'7vh',
        backgroundColor:'#2E1D1E',
        marginTop:'100px',
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center'
     },
     footertxt:{
        color:'white',
        marginLeft:'250px',
        fontSize:'12px'
     }
})

const WishList=()=>{
    const classes=useStyles();
    const [wishList,setWishList]=useState([]);
    const removeitem=(id)=>{
        removeFromWishList(id).then(res=>{
            console.log(res)
        }).then(err=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        getAllWishList().then(res=>{
            console.log(res)
            setWishList(res.data.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])
    return(
            <Box>
                <Header sx={{position:'fixed'}}/>
                <Box className={classes.cartHeader}>
                    <Box className={classes.homeText}>Home/</Box>
                    <Box className={classes.cartText}>My WishList</Box>
                </Box>
                <Box className={classes.container}>
                    <Box className={classes.main}>
                        <Box className={classes.details}>
                            <span>My Wishlist</span>
                        </Box>
                    </Box>
                    {
                        wishList.map((book)=>(
                            <Box className={classes.mainWishList}>
                                <Box className={classes.textcart}>
                                    <Box className={classes.bookimage}>
                                        <img width='100%' height='100%' src={Buffer.from(book.bookImage).toString()} />
                                    </Box>
                                    <Box className={classes.container2}>
                                        <Box className={classes.bookTitle}>
                                            {/* Harry potter */}
                                            {book.bookName}
                                        </Box>
                                        <Box className={classes.bookAuthor}>
                                            {/* by J. K. Rowling */}
                                            {book.description}
                                        </Box>
                                        <Box className={classes.bookPrice}>
                                            <Box className={classes.discountPrice}>
                                                {/* Rs.1200 */}
                                                Rs.{book.price}
                                            </Box>
                                            <Box className={classes.mPrice}>
                                                Rs.2000
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className={classes.deletewishlist}>
                                        <DeleteOutlined onClick={() => removeitem(book.id)} sx={{ color: '#9D9D9D' }} fontSize='small' />
                                    </Box>
                            </Box>
                        ))
                    }
                </Box>
                <Box className={classes.footer}>
                    <Box className={classes.footertxt}>Copyright @ 2022, Bookstore Private Limited.All Rights Reserved</Box>
                </Box>
            </Box>
    )
}
export default WishList;
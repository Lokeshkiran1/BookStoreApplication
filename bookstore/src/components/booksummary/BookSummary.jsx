import React, { useState } from "react";

import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { Button ,Divider} from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { Buffer } from "buffer";
import Counter from "../counter/Counter";
import { addToBag } from "../../services/CartService";
import { addToWishList } from "../../services/WishlistService";

const useStyles=makeStyles({
    mainContainer:{
            border:'0px solid #878787',
            width:'60vw',
            height:'75vh',
            display:'flex',
            flexDirection:'row',
            position:'relative',
            top:'10px',
            left:'50px'
    },
    container1:{
        border:'0px solid green',
        width:'40%',
        height:'100%',
        display:'flex',
        flexDirection:'row',
    },
    container2:{
        border:'0px solid blue',
        width:'60%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
    },
    innerContainer1:{
        border:'0px solid orange',
        width:'15%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
    },
    innerContainer2:{
        border:'0px solid brown',
        width:'80%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start'
    },
    image:{
        border:'0px solid #7C1E1E',
        width:'90%',
        height:'10%',
        marginBottom:'5px',
        padding:'2px'
    },
    mainBook:{
        border:'1px solid #D1D1D1',
        width:'100%',
        height:'70%'
        
    },
    imageBook:{
        width:'80%',
        height:'85%',
        marginTop:'25px'
    },
    buttons:{
        border:'0px solid black',
        marginTop:'20px',
        width:'25vw',
        height:'8%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        position:'relative',
        right:'40px'
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
        fontSize:'24px',
        fontWeight:'bold',
    },
    bookAuthor:{
        fontSize:'16px',
        color:'#878787'
    },
    bookRatings:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    ratings:{
        display:'flex',
        flexDirection:'row',
        border:'0px solid black',
        background:'#388E3C',
        width:'50px',
        height:'25px',
        justifyContent:'space-around',
        alignItems:'center',
    },
    qty:{
        border:'0px solid red',
        width:'30px',
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
        fontSize:'20px',
        fontWeight:'bold',
    },
    mPrice:{
        fontSize:'14px',
        color:'#878787',
        textDecorationLine:'line-through'
    }

})
const BookSummary=(props)=>{
    const classes=useStyles();

    const [toggle,setToggle]=useState(false);
    const [toggleW,setToggleW]=useState(false);

    const addToCart=()=>{
        setToggle(true)
        let bookId=props.inputObj.id
        console.log("from booksummary to cart:",bookId)
        addToBag(bookId).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }
    const addToWishlist=()=>{
        let bookId=props.inputObj.id
        console.log("from booksummary to wishlist:",bookId)
        addToWishList(bookId).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        }) 
    }
    const image = Buffer.from(props.inputObj.bookImage).toString();
   console.log("from book summary",props.inputObj)
    return(
        <div>
            <Box className={classes.mainContainer}>
                <Box className={classes.container1}>
                    <Box className={classes.innerContainer1}>
                        <img className={classes.image} src={image}/>
                        <img className={classes.image} src='https://kbimages1-a.akamaihd.net/bd02da79-b80a-42ef-a788-168ae2f20393/1200/1200/False/harry-potter-and-the-deathly-hallows-4.jpg'/>
                    </Box>
                    <Box className={classes.innerContainer2}>
                        <Box className={classes.mainBook}>
                            <img className={classes.imageBook} src={image} />
                        </Box>
                        <Box className={classes.buttons}>
                            {
                                toggle?<Counter inputObj={props.inputObj}/>:
                                <Button variant="contained" onClick={addToCart} style={{backgroundColor:'#A03037',fontSize:'14px !important'}}>Add to cart</Button>
                            }
                            
                            <Button variant="contained" onClick={addToWishlist} style={{backgroundColor:'#333333',display:'flex',flexDirection:'row',justifyContent:'space-between',width:'33%'}}>
                                <div style={{marginTop:'6px'}}><FavoriteBorderIcon /></div>
                                <div>Wishlist</div>
                            </Button>
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.container2}>
                    <Box className={classes.bookTitle}>
                        {/* Harry potter */}
                        {props.inputObj.bookName}
                    </Box>
                    <Box className={classes.bookAuthor}>
                        {/* by J. K. Rowling */}
                        {props.inputObj.description}
                    </Box>
                    <Box className={classes.bookRatings}>
                        <Box className={classes.ratings}>
                            <Box sx={{fontSize:'16px',color:'white'}}>4.5</Box>
                            <StarBorderOutlinedIcon sx={{width:'15px',height:'13px',color:'white'}}/>
                        </Box>
                        <Box className={classes.qty}>
                            {/* (20) */}
                            ({props.inputObj.quantity})
                        </Box>
                    </Box>
                    <Box className={classes.bookPrice}>
                        <Box className={classes.discountPrice}>
                            {/* Rs.1200 */}
                            Rs.{props.inputObj.price}
                        </Box>
                        <Box className={classes.mPrice}>
                            Rs.2000
                        </Box>
                    </Box>
                    <Divider sx={{borderBottomWidth:3,width:'95%'}}/>
                    <Box style={{width:'100%',height:'30%',marginLeft: '0px', fontSize: '14px', opacity: '0.8'}}>
                        <span style={{fontWeight:'bold'}}>Book Details:</span>
                        <p>A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover.[1] The technical term for this physical arrangement is codex (plural, codices). In the history of hand-held physical supports for extended written compositions or records, the codex replaces its predecessor, the scroll</p>
                    </Box>
                    <Divider sx={{borderBottomWidth:3,width:'95%'}}/>
                    <Box style={{width:'100%',height:'30%'}}>
                        Customer Feedback:
                    </Box>
                    <Divider sx={{borderBottomWidth:3,width:'95%'}}/>
                </Box>
            </Box>
        </div>
    )
}
export default BookSummary;
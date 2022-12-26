import React from "react";

import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { Button ,Divider} from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

const useStyles=makeStyles({
    mainContainer:{
            border:'2px solid #7C1E1E',
            width:'70vw',
            height:'80vh',
            display:'flex',
            flexDirection:'row',
            position:'relative',
            top:'60px'
    },
    container1:{
        border:'0px solid green',
        width:'50%',
        height:'100%',
        display:'flex',
        flexDirection:'row',
    },
    container2:{
        border:'0px solid blue',
        width:'50%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
    },
    innerContainer1:{
        border:'0px solid orange',
        width:'10%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
    },
    innerContainer2:{
        border:'0px solid brown',
        width:'90%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start'
    },
    image:{
        border:'1px solid #7C1E1E',
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
        width:'60%',
        height:'85%',
        marginTop:'25px'
    },
    buttons:{
        border:'0px solid black',
        marginTop:'20px',
        width:'100%',
        height:'8%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    container2:{
        width:'50%',
        height:'auto',
        border:'0px solid red',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'flex-start',
        marginLeft:'20px'
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
const BookSummary=()=>{
    const classes=useStyles()
    return(
        <div>
            <Box className={classes.mainContainer}>
                <Box className={classes.container1}>
                    <Box className={classes.innerContainer1}>
                        <img className={classes.image} src='https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/41Z7OB85fFL._SX385_BO1,204,203,200_.jpg' />
                        <img className={classes.image} src='https://kbimages1-a.akamaihd.net/bd02da79-b80a-42ef-a788-168ae2f20393/1200/1200/False/harry-potter-and-the-deathly-hallows-4.jpg'/>
                    </Box>
                    <Box className={classes.innerContainer2}>
                        <Box className={classes.mainBook}>
                            <img className={classes.imageBook} src='https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/41Z7OB85fFL._SX385_BO1,204,203,200_.jpg' />
                        </Box>
                        <Box className={classes.buttons}>
                            <Button variant="contained" style={{backgroundColor:'#A03037'}}>Add to cart</Button>
                            <Button variant="contained" style={{backgroundColor:'#333333',display:'flex',flexDirection:'row',justifyContent:'space-between',width:'33%'}}>
                                <div style={{marginTop:'6px'}}><FavoriteBorderIcon /></div>
                                <div>Wishlist</div>
                            </Button>
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.container2}>
                    <Box className={classes.bookTitle}>
                        Harry potter
                        {/* {props.book.bookName} */}
                    </Box>
                    <Box className={classes.bookAuthor}>
                        by J. K. Rowling
                        {/* {props.book.description} */}
                    </Box>
                    <Box className={classes.bookRatings}>
                        <Box className={classes.ratings}>
                            <Box sx={{fontSize:'16px',color:'white'}}>4.5</Box>
                            <StarBorderOutlinedIcon sx={{width:'15px',height:'13px',color:'white'}}/>
                        </Box>
                        <Box className={classes.qty}>
                            (20)
                            {/* ({props.book.quantity}) */}
                        </Box>
                    </Box>
                    <Box className={classes.bookPrice}>
                        <Box className={classes.discountPrice}>
                            Rs.1200
                            {/* Rs.{props.book.price} */}
                        </Box>
                        <Box className={classes.mPrice}>
                            Rs.2000
                        </Box>
                    </Box>
                    <Divider sx={{borderBottomWidth:3,width:'95%'}}/>
                    <Box style={{width:'100%',height:'20%'}}>
                        Book Details:
                    </Box>
                    <Divider sx={{borderBottomWidth:3,width:'95%'}}/>
                    <Box style={{width:'100%',height:'20%'}}>
                        Customer Feedback:
                    </Box>
                    <Divider sx={{borderBottomWidth:3,width:'95%'}}/>
                </Box>
            </Box>
        </div>
    )
}
export default BookSummary;
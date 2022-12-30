import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import Header from '../header/Header';
import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import { getAllBooksCart, removeFromBag, removeFromBagDirectly } from '../../services/CartService';
import { useEffect } from 'react';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { Buffer } from "buffer";
import Counter from '../counter/Counter';
import { Button } from '@mui/material';
import CustomerDetails from '../customerDetails/CustomerDetails';
import OrderSuccess from '../ordersuccess/OrderSuccess';
import { useNavigate } from "react-router-dom";

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
        fontSize: '18px',
        fontWeight:'500',
        position:'relative',
        left:'8px'
     },
     container:{
        width:'60vw',
        height:'auto',
        border:'0px solid black',
        display:'flex',
        flexDirection:'column',
        flexWrap:'wrap',
        position:'relative',
        left:'190px'
     },
     mainCard:{
        width: '100%',
        height: 'auto',
        border: '1px solid #DBDBDB',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:'20px'
     },
     details:{
        width:'90%',
        height:'90%',
        display:'flex',
        flexDirection:'column',
        border:'0px solid red'
    },
    cartLocation:{
        display:'flex',
        height:'50px',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    textcart:{
        width:'70%',
        height:'25vh',
        border:'0px solid blue',
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        marginBottom:'50px'
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
        fontSize:'16px',
        fontWeight:'bold',
    },
    mPrice:{
        fontSize:'14px',
        color:'#878787',
        textDecorationLine:'line-through'
    },
    addressdetailscart:{
        width:'100%',
        height:'40px',
        border:'1px solid #DBDBDB',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'20px',
        fontWeight:'bold',
        marginBottom:'5px'
    },
    btn:{
        width:'100%',
        display:'flex',
        justifyContent:'flex-end',
        marginBottom:'20px'
    }

})




const MyCart=()=>{

    const navigate=useNavigate();
    const classes=useStyles();
    const [cartList,setCartList]=useState([]);
    const [details,setDetails]=useState(false);
    const [toggle, setToggle] = useState(false);
    const [order,setOrder]=useState(false);

    const openCustomerDetails=()=>{
        setDetails(true)
        setToggle(true)
    }
    const openOrderSummary=()=>{
        setOrder(true)
    }
    const orderPlaced=()=>{
        navigate('/ordersuccess')
    }


    const removeBook=(book)=>{

        console.log(book.id)
        removeFromBagDirectly(book.productId).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }


    const getCartList=()=>{
        getAllBooksCart().then(res=>{
            console.log(res)
            setCartList(res.data.data)
        }).catch(err=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        getCartList()
    },[])
    return(
        <Box>
            <Header />
            <Box className={classes.cartHeader}>
                <Box className={classes.homeText}>Home/</Box>
                <Box className={classes.cartText}>My cart</Box>
            </Box>
            <Box className={classes.container}>
                <Card className={classes.mainCard} variant='outlined'>
                   <Box className={classes.details}>
                      <Box className={classes.cartLocation}>
                          <Box sx={{ fontSize: '18px', fontWeight: '500',}}>My cart (1)</Box>
                      </Box>
                      <Box>
                        {
                            cartList.map((book)=>(
                        
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
                                        <Box className={classes.bookRatings}>
                                           <Box className={classes.ratings}>
                                               <Box sx={{fontSize:'16px',color:'white'}}>4.5</Box>
                                                  <StarBorderOutlinedIcon sx={{width:'15px',height:'13px',color:'white'}}/>
                                                </Box>
                                                <Box className={classes.qty}>
                                                 {/* (20) */}
                                                 ({book.quantity})
                                                </Box>
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
                                            <Box>
                                              <Counter inputObj={book}/>
                                            </Box>
                                        </Box>
                                        <Box sx={{ width: '30%' }}>
                                                    <Button
                                                        onClick={() => removeBook(book)}
                                                        style={{ fontSize: '14px', color: '#0A0102', fontWeight: '500',alignItems:'flex-end',position:'relative',top:'130px',right:'160px',textTransform:'none'}} >Remove</Button>
                                        </Box>
                                   </Box>
                            ))
                        }
                        <Box sx={{display:'flex',justifyContent:'flex-end',alignItems:'flex-end',marginBottom:'50px'}}>
                            {
                                details ? null :
                                <Button sx={{backgroundColor:'#3371B5'}} variant='contained' onClick={openCustomerDetails}>Palce Order</Button>
                            }

                        </Box>
                      </Box>
                   </Box>
                </Card>
                {
                    toggle?<CustomerDetails  openOrderSummary={openOrderSummary}/>
                    :
                    <Card className={classes.addressdetailscart} variant="outlined">
                            <span className={classes.textmycart}>Address Details</span>
                    </Card>
                }
                { order?
                    <Card className={classes.mainCard} variant='outlined'>
                        <Box className={classes.details}>
                            <Box className={classes.cartLocation}>
                                <Box sx={{ fontSize: '18px', fontWeight: '500',}}>Order Summary (1)</Box>
                            </Box>
                            <Box>
                            {
                                 cartList.map((book)=>(
                         
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
                                         <Box className={classes.bookRatings}>
                                            <Box className={classes.ratings}>
                                                <Box sx={{fontSize:'16px',color:'white'}}>4.5</Box>
                                                   <StarBorderOutlinedIcon sx={{width:'15px',height:'13px',color:'white'}}/>
                                                 </Box>
                                                 <Box className={classes.qty}>
                                                  {/* (20) */}
                                                  ({book.quantity})
                                                 </Box>
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
                                ))

                            }
                             <Box className={classes.btn}>
                                        <Button variant='contained' sx={{ width: '23%' }} onClick={orderPlaced}>Checkout</Button>
                                    </Box>
                            </Box>
                        </Box>
                    </Card>
                    :
                    <Card className={classes.addressdetailscart} variant="outlined">
                        <span className={classes.textmycart}>Order summery</span>
                    </Card>
                }
            </Box>
        </Box>
    )
}
export default MyCart;
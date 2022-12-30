import React, { useEffect } from "react";
import { useState } from "react";
import Book from "../../components/book/Book";
import BookSummary from "../../components/booksummary/BookSummary";
import CustomizedMenus from "../../components/dropdownmenu/DropDownMenu";
import Header from "../../components/header/Header";
import { getAllBooks } from "../../services/DataService";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { Pagination, Stack } from "@mui/material";


const useStyles=makeStyles({
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
        marginLeft:'180px',
        fontSize:'14px'
     }
})

const DashBoard=()=>{
    const classes=useStyles();
    const [booksList,setBookList]=useState([]);
    const [inputObj,setInputObj]=useState({
        bookName:""
    })

    const[toggle,setToggle]=useState(false)
    // const[pagination,setPagination]=useState(false);
    const[page,setPage]=useState(1);

    const openBookSummary=(obj)=>{
        setToggle(true);
        console.log("from dashboard",obj);
        setInputObj(obj)
    }
console.log("from input obj",inputObj)
    const getBook=()=>{
        getAllBooks().then(res=>{
            console.log(res);
            let obj=res.data.data;
            setBookList(obj)
        }).catch(err=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        getBook()
    },[])
    const autoRefresh=()=>{
        getBook();
    }
    const[currentPage,setCurrentPage]=useState(1);
    const[booksPerPage,setBooksPerPage]=useState(8);

    const numberOfBooks=booksList.length;
    const numberOfPages=Math.ceil(numberOfBooks/booksPerPage);
    const lastBookIndex=currentPage*booksPerPage;
    const firstBookIndex=lastBookIndex-booksPerPage;
    const currentBooks=booksList.slice(firstBookIndex,lastBookIndex)
    

    return(
        <div>
            <Header />
            <div style={{border:'0px solid red', position:'relative',left:'190px',width:'75%',height:'auto'}}>
                <div style={{border:'0px solid green',display:'flex',flexDirection:'row',justifyContent:'space-between',width:'100%',height:'60px'}}>
                    <div style={{border:'0px solid green',display:'flex',flexDirection:'row',justifyContent:'space-between',width:'13%',alignItems:'center'}}>
                        <div style={{fontSize:'20px',fontWeight:'bold'}}>
                            Books
                        </div>
                        <div style={{color:'#878787',position:'relative',right:'40px'}}>
                            ({booksList.length})
                        </div>
                    </div>
                    <div style={{alignContent:'center',marginTop:'10px',color:'black'}}>
                        <CustomizedMenus />
                    </div>
                </div>
                <div>
                    {
                        toggle? <BookSummary inputObj={inputObj} />:
                        <div style={{ display:'flex',flexDirection:'row',justifyContent:'space-between',flexWrap:'wrap'}}>
                            {
                                currentBooks.map((book)=>(<Book book={book} getBook={getBook} autoRefresh={autoRefresh} openBookSummary={openBookSummary}/>))
                            }
                        </div>
                    }
                </div>
            </div>
            {
                <Box sx={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                        <Pagination count={numberOfPages} onChange={(event,value)=>setCurrentPage(value)}/>
                        
                </Box>
            }
            <Box className={classes.footer}>
                    <Box className={classes.footertxt}>Copyright @ 2022, Bookstore Private Limited.All Rights Reserved</Box>
            </Box>
        </div>
    )
}

export default DashBoard;

import React, { useEffect } from "react";
import { useState } from "react";
import Book from "../../components/book/Book";
import BookSummary from "../../components/booksummary/BookSummary";
import CustomizedMenus from "../../components/dropdownmenu/DropDownMenu";
import Header from "../../components/header/Header";
import { getAllBooks } from "../../services/DataService";

const DashBoard=()=>{
    const [booksList,setBookList]=useState([]);
    const [inputObj,setInputObj]=useState({
        bookName:""
    })
    const[toggle,setToggle]=useState(false)

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
            //console.log("=======",obj)
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


    return(
        <div>
            <Header />
            <div style={{border:'0px solid red', position:'relative',left:'190px',width:'75%',height:'auto'}}>
                <div style={{border:'0px solid green',display:'flex',flexDirection:'row',justifyContent:'space-between',width:'100%',height:'60px'}}>
                    <div style={{border:'0px solid green',display:'flex',flexDirection:'row',justifyContent:'space-between',width:'13%',alignItems:'center'}}>
                        <div style={{fontSize:'20px',fontWeight:'bold'}}>
                            Books
                        </div>
                        <div style={{color:'#878787'}}>
                            (11 Items)
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
                                booksList.map((book)=>(<Book book={book} getBook={getBook} autoRefresh={autoRefresh} openBookSummary={openBookSummary}/>))
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default DashBoard;

import React from "react";
import { makeStyles } from "@mui/styles"; 
import { AppBar, Box, Toolbar } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
const useStyles=makeStyles({

});

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "25vw !important",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
      position:"relative",
      left:"70px",
    },
  }));
  
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent:"flex-start"
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
      position:"relative",
      right:"200px",
      color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "50%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));
  

function Header(){
    const classes=useStyles();
    return(
        <Box className={classes.header} sx={{flexGrow:1}}>
            <AppBar className={classes.appBar} position="static" sx={{backgroundColor:'#A03037'}}>
                <Toolbar>
                    <div className="keep" style={{border:'0px solid black',width:'50px',position:'relative',left:'155px'}}>
                        <img src="book.png" alt="logo"/>
                    </div>
                    <div
                        className="topography"
                        variant="h6"
                        noWrap
                        component="div"
                        style={{ width:'10px',height:'10px',fontSize:'20px',color:'white',fontWeight:'bold',position:'relative',left:'150px',bottom:'10px'}}
                        >
                        Bookstore
                    </div>
                    <Search className="searchIcon" style={{color:'black',width:'40vw',border:'0px solid black',position:'relative',left:'250px'}}>
                        <SearchIconWrapper className="wrapper" sx={{background:'#f1f3f4',height:'100%',width:'40vw',borderRadius:'8px'}}>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ "aria-label": "search" }}
                            className="search"
                            sx={{color:'black',border:'0px solid red',width:'10% !important',marginRight:'0px',position:'relative',right:'80px'}}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1,border:"0px solid red" ,height:"7vh",width:'10vw'}} >
                        <Box className="iconsFive" sx={{ display: { xs: "none", md: "flex" , border:"0px solid black",width:"20vw",position:"relative",left:"520px",display:"flex",flexDirection:"row",justifyContent:"space-evenly"} }}>
                            <IconButton
                                size="large"
                                aria-label="show 4 new mails"
                                color="white"
                                sx={{color:'white'}}
                            >
                                <Badge color="error">
                                    <PersonOutlineOutlinedIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="white"
                                sx={{color:'white'}}
                            >
                                <Badge color="error">
                                    <ShoppingCartOutlinedIcon />
                                </Badge>
                            </IconButton>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </Box>
    )
}
export default Header;
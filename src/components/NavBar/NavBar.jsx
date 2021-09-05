import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useHistory,useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, AppBar, Typography,Toolbar ,Avatar} from "@material-ui/core";
import useStyles from "./styles"
import {fetchPosts} from '../../action/posts'
import {HomeOutlined} from '@material-ui/icons'
import {LOGOUT} from '../../constants'
import decode from 'jwt-decode';
const NavBar = () => {
  const history=useHistory()
  const [user,setUser]=useState(JSON.parse(localStorage.getItem('token')))
  const dispatch=useDispatch()
  const classes=useStyles()
  const posts=useSelector(state=>state?.posts)
  const location=useLocation()
 


  const logout=()=>{
    
    dispatch({type:LOGOUT})
    setUser(null)
    history.push('/auth')
    
 
}
  useEffect(()=>{
    dispatch(fetchPosts())
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
console.log(decodedToken);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
   
    setUser(JSON.parse(localStorage.getItem('token')))
  },[location,logout])
  
  return (
   
      
      
      <AppBar className={classes.appBar} variant="elevation" position=''>
        
        <Toolbar className={classes.toolbar} variant='regular'>
          {user ? (
            <>
            <HomeOutlined ></HomeOutlined>
            <Button onClick={logout}> 
            Log Out
            </Button>
          <Avatar  src={user?.user.imageUrl}>{user.user.name.charAt(0)}</Avatar>
            </>
          ):(
            <>
            <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
            </>
          )}
          
        </Toolbar>
      </AppBar>
    
  );
};

export default NavBar;

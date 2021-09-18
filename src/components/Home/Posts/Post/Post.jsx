import React, { useState } from "react";
import {
  Avatar,
  Backdrop,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  CircularProgress,
  Paper
} from "@material-ui/core";
import useStyles from "./styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PostCard from "./PostCard";

function Post({name,comment}) {
  const classes = useStyles();
  const [open,setOpen]=useState(false);
  const clickHandler=()=>{
    setOpen(!open)
  }

  return (
    <>
    {open && (<PostCard openChange={clickHandler} name={name} comment={comment}/>)}
    <Card className={classes.card} raised elevation={4} onClick={clickHandler} >
      <CardHeader
        avatar={<Avatar className={classes.avatar}>R</Avatar>}
        title={name}
        subheader="September 14, 2016"
      />
      <CardContent >
        <p>{comment}</p>
      </CardContent>
      <img  className={classes.media} src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" alt="" />
      <CardActions disableSpacing>
        <IconButton>
          <FavoriteIcon color='primary'/>
        </IconButton>
      </CardActions>
    </Card>
   
    </>
  );
}

export default Post;

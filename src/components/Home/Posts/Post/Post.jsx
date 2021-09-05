import React from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
} from "@material-ui/core";
import useStyles from "./styles";
import FavoriteIcon from "@material-ui/icons/Favorite";

function Post() {
  const classes = useStyles();
  return (
    <Card className={classes.card} raised elevation={4}>
      <CardHeader
        avatar={<Avatar className={classes.avatar}>R</Avatar>}
        title="Post Title"
        subheader="September 14, 2016"
      />
      <CardContent>
        <h1>dfgfsg</h1>
      </CardContent>
      <CardMedia
        className={classes.media}
        image="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
      />
      <CardActions disableSpacing>
        <IconButton>
          <FavoriteIcon color='primary'/>
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Post;

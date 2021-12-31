import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import React from "react";

function UserList({user}) {
  return (
    <ListItem style={{ backgroundColor: "almound", height: "40px" }}>
      <ListItemAvatar>
        <Avatar style={{ height: "30px", backgroundColor: "red" }}>
          {user.name.charAt(0)}
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={user.name} />
    </ListItem>
  );
}

export default UserList;

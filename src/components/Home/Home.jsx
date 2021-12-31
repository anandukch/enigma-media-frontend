import React from "react";
import Posts from "./Posts/Posts";
import {
  Container,
  Grid,
  List,
  Avatar,
  Paper,
} from "@material-ui/core";
import UserList from "./UserList/UserList";

function Home() {
  const user = [
    {
      name: "Soumya",
    },
    {
      name: "Anandu",
    },
    {
      name: "Soumya",
    },
  ];
  return (
    <Container>
      <Grid container spacing={5} justifyContent="center" alignItems="flex-start">
        {/* <Grid item lg={3} md={3} style={{ position: "sticky", top: "100px" }}>
          <Paper elevation={0} style={{ borderRadius: "50px" }}>
            <Avatar
              style={{ marginLeft: "40%", width: "50px", height: "50px" }}
              alt="Remy Sharp"
              src="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
            />
          </Paper>
        </Grid> */}
        <Grid item lg={10} md={6}>
          <Posts />
        </Grid>
        <Grid item lg={1} md={1} style={{ position: "sticky", top: "100px" }}>
          <List>
            {user.map((user) => (
              <>
              <UserList user={user}/>
              </>
            ))}
          </List>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;

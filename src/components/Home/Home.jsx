import React from 'react'
import Posts from './Posts/Posts'
import {Container,Card, Grid, List, ListItem, ListItemAvatar, ListItemText ,Avatar, Paper, CardMedia} from '@material-ui/core'


function Home() {
    const user=[
        {
            name:'Soumya',
           
        },
        {
            name:'Anandu',
        
        },
        {
            name:'Soumya',
            
        }

    ]
    return (
        <Container >
            <Grid container spacing={4} alignItems='flex-start'>
                <Grid item lg={3} md={3} style={{ position:'sticky',top:'100px'}}>
                    <Paper elevation={0} style={{borderRadius:'50px'}}>
                    {/* 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' */}
                        
                            <Avatar style={{marginLeft:'40%',width:'50px',height:'50px'}}  alt="Remy Sharp" src="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg" />
                            {/* <CardMedia
                            style={{padding:'20%',borderRadius:'50%',width:'5px',height:'5px',marginLeft:'27%'}}
                            image="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
                            /> */}
                        
                    </Paper>
                </Grid>
                <Grid item lg={6} md={6} alignItems='center'>
                    <Posts/>
                </Grid>
                <Grid item lg={3} md={3} style={{ position:'sticky',top:'100px'}}>
                    <List>
                        {user.map(user=>(
                            <ListItem style={{backgroundColor:'almound',height:'40px'}}>
                            <ListItemAvatar  >
                                <Avatar style={{height:'30px',backgroundColor:'red'}}>{user.name.charAt(0)}</Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={user.name}/>
                        </ListItem>
                        ))}
                        
                    </List>
                </Grid>
            </Grid>


        </Container>
    )
}

export default Home

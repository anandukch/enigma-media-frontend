import React from 'react'
import Posts from './Posts/Posts'
import {Container,Card, Grid, List, ListItem, ListItemAvatar, ListItemText ,Avatar} from '@material-ui/core'


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
        <Container style={{marginTop:'100px'}}>
            <Grid container spacing={4} alignItems='flex-start'>
                <Grid item lg={3} style={{backgroundColor:'red', position:'sticky',top:'100px'}} >
                    dfg
                </Grid>
                <Grid item lg={6}>
                    <Posts/>
                </Grid>
                <Grid item lg={3} style={{ position:'sticky',top:'100px'}}>
                    <List>
                        {user.map(user=>(
                            <ListItem style={{backgroundColor:'almound'}}>
                            <ListItemAvatar>
                                <Avatar>{user.name.charAt(0)}</Avatar>
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

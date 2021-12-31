import { Backdrop, Container } from '@material-ui/core'
import React from 'react'
import useStyles from '../styles'
function PostCard({openChange,name,comment}) {
    const classes=useStyles()
    const changeOpen=()=>{
        openChange(false)
    }
    return (
        <Backdrop className={classes.backdrop} open onClick={changeOpen}>
            <Container>
               {name}
            </Container>
        </Backdrop>
    )
}
export default PostCard

import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(theme=>({
    paper:{
        display:'flex',
        flexDirection:'column',
       
        
    },
    buttons:{
        display:'flex',
        // padding:theme.spacing(2)

    },
    submit: {
        margin: theme.spacing(1, 30),
      },
}))
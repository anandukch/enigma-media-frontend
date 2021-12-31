import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(theme=>({
    card:{
        // width:'100%',
        marginTop:'10px',
        height:'80%',
        // alignItems:'center',
    },
    avatar:{
        
        backgroundColor:'#f50057'
    },
    media:{
        height:'56.25%',
        // marginRight:'90px',
        width:'100%',
        // padding:'20%',
        // padding:'100%'
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
      },
    
}))
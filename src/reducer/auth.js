import {AUTH,LOGOUT} from '../constants'

const authReducer=(state={userData:null},action)=>{
    switch(action.type){
        
        case AUTH:
            
            localStorage.setItem('token', JSON.stringify(action?.data ));
            
            return {
                ...state,
                userData:action?.data
            }
            case 'ERROR':
                return{
                    ...state,
                    error:action?.data
                }
            
        case LOGOUT:
            localStorage.clear()
            return {
                ...state,
                userData:null
            }
        default:

            return state
    }
}

export default authReducer
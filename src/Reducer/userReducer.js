
import { users_request,get_users_success,get_users_failed } from '../Action/types';

const initialState = {
 Loading: false,
 users:[],
 error: ''
}

  const userReducer=(state = initialState, action) =>{
   
  switch (action.type) {
    case  users_request:
        return {
          ...state,
          loading: true
        }
    case get_users_success:
        return {
          ...state,
          loading: false,
          users: action.payload
          
        }

        case get_users_failed:
          return {
            ...state,
            loading: false,
            users:[],
            error:action.payload
          }
   
          default:
            return state;
        }
}
export default userReducer;
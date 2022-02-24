import React,{useEffect} from  'react'
import { userList } from '../Action/userAction'
import{connect} from 'react-redux'

const Users =({ userList,Loading,users,error})=>{
    useEffect(()=>{
        userList()
    },[])
    
     return(
         <div>
             {
             Loading?<h3>Loading</h3>:error?<h3>{error}</h3>:<div> 
                {
                    users.map(user=>{
                        return <h4>{user.name}</h4>
                    })
                }
                </div>
                 }
                </div>
     
     )
            }
const mapStateToProps = (state)=>({
  Loading: state.userReducer.loading,
  users:state.userReducer.users,
  error: state.userReducer.error
})
export default connect(mapStateToProps,{userList})(Users)


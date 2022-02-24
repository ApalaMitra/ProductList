import React from 'react'
import Users from './Components/Users'
import { Provider } from 'react-redux';
import store from './store';
const App=()=>{
  
    return (
      <Provider store={store}>
      <div>
         
        <Users/>
        
      </div>
      </Provider>
      
    )
  }


export default App

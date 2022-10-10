import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import React from 'react';

import HomeComp from './pages/home/HomeComp';
import UserHomeComp from './pages/users/UserHomeComp';
import PostsComp from './pages/posts/PostsComp';

export const userContext = React.createContext('praveen')
function App() {

   
  return (
    <Provider store={store}>
      <div className="App">
            <Router>
              <Routes>
                  <userContext.Provider value="praveen joshi">
                    <Route exact path='/users' element={< UserHomeComp />}></Route>
                  </userContext.Provider>             
              </Routes>
              <Routes> 
                  <Route exact path='/' element={< HomeComp />}></Route>                  
                  <Route exact path='/posts' element={< PostsComp />}></Route>
              </Routes>
            </Router>
      </div>
    </Provider>
  );
}

export default App;

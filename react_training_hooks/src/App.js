import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Components/UseStateCounter';
import HooksWithObject from './Components/UseStateObject';
import UseStateArray from './Components/UseStateArray'
import UseEffectCounter from './Components/UseEffectCounter'
import UseEffectOnlyOnce from './Components/UseEffectOnlyOnce'
import UseEffectForAPIs from './Components/UseEffectForAPIs';
import UseContextCompo from './Components/UseContextCompo';
import UseReducerCounter from './Components/UseReducerCounter';
import UseReducerWithContext from './Components/UseReducerWithContext';

export const userContext = React.createContext()
export const productContext = React.createContext()

function App() {
  return (
    <div className="App">
      {/* <userContext.Provider value={'Praveen'}>
        <productContext.Provider value={"Amazon"}>
            <UseContextCompo />
        </productContext.Provider>
      </userContext.Provider> */}
        
      {/* <UseReducerCounter/> */}

      <UseReducerWithContext />
    </div>
  );
}

export default App;

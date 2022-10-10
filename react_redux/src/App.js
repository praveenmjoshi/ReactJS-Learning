import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import CakeContainer from './Components/CakeContainer';
import HooksCakeContainer from './Components/HooksCakeContainer';
import IceCreamContainer from './Components/IceCreamContainer';
import OrdersComponent from './Components/OrdersComponent';
import UserComponent from './Components/UserComponent';
import store from './redux/store';


function App() {
  return (
    <Provider store={ store }>
      <div className="App">
        {/* <CakeContainer /> */}
        <HooksCakeContainer/>
        <IceCreamContainer />
        <OrdersComponent/>
        <UserComponent/>
      </div>
    </Provider>
    
  );
}

export default App;

import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';
import NavBar from './components/NavBar';
import Details from './components/Details';
import Products from './components/Products';
import Features from './components/Features';
import Services from './components/Services';

import NoPathMatch from './components/NoPathMatch';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="users" element={<Users/>} ></Route>
          <Route path="details" element={<Details />} />
          <Route path="products" element={<Products/>}> 
              <Route index element={<Features/>}/>
              <Route path="features" element={<Features/>} />
              <Route path="services" element={<Services/>} />
          </Route>
          <Route path="*" element={ <NoPathMatch/>} />
        </Routes>
    </div>
  );
}

export default App;

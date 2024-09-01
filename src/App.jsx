/* eslint-disable no-undef */
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomeComponent from './components/HomeView/HomeComponent';
import DeliveryComponent from './components/DeliveryView/DeliveryComponent';
import MenuComponent from './components/MenuView/MenuComponent';
import ContactoComponent from './components/ContactoView/ContactoComponent';
import SingleProd from './components/ProductsView/SingleProd';


function App() {

  return (
    <Router>
      <NavBar />
      <div className='PageContent'>
        <Routes>
          <Route exact path="/" element={<HomeComponent />} /> 
          <Route exact path="/delivery" element={<DeliveryComponent />} />
          <Route exact path="/menu" element={<MenuComponent />} />
          <Route exact path="/contacto" element={<ContactoComponent />} />
          <Route path="/product/:prodId" element={<SingleProd />}/>
        </Routes>
       
      </div>
    </Router>
  );
}

export default App;


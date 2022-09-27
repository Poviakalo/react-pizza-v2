import React from 'react';
import { Routes, Route,} from "react-router-dom";

import './scss/app.scss';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Cart from './pages/Cart'
import Notfound from './pages/Notfound';

export const SearchContext = React.createContext();


// import pizzas from './assets/pizzas.json'; - створюємо стейт для сховища піц які отримуємо з бекенду

function App() {
  const [search, setSearch] = React.useState(''); 

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{search, setSearch}}>
      <Header />      
      <div className="content">        
        <Routes>
          <Route path='/react-pizza-v2' element={<Home />} />
          <Route path='/react-pizza-v2/cart' element={<Cart />} />
          <Route path='*' element={<Notfound />} />
        </Routes>    
      </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;

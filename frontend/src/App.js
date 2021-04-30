

import React from 'react';
import data from './data';
import { BrowserRouter, Route } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Product from './components/Product'
import CartScreen from './screens/CartScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
        
    <header className="row">
       <div > <a className="brand" href="/">amazona</a></div>
        <div><a href="/cart">Cart</a>
        <a href="/signin">Sign in</a>
       </div>
    </header>
     <main>
     <Route path="/cart/:id?" component={CartScreen}></Route>
     <Route path="/product/:id" component={ProductScreen} ></Route>
     <Route path="/" component={HomeScreen} exact></Route>
     
     </main>
     <footer className="row center">
        all right reserved
     </footer>
</div>
</BrowserRouter>
  );
}

export default App;

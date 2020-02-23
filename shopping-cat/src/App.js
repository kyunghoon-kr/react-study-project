import React from 'react';
import NavBar from './components/NavBar';
import { Route } from 'react-router-dom';
import ProductsContainer from './containers/ProductsContainer';
import BasketsContainer from './containers/BasketsContainer';

const App = (props) => {

  return (
    <>
     <NavBar/>
     <Route exact path="/" render={
       ()=> 
          <ProductsContainer/>
      }/>
     <Route path="/baskets" render={
      ()=> 
        <div>
          <BasketsContainer/>
        </div>
     }/>
    </>
  );
};

export default App;
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import cat1 from './assets/cat.4001.jpg';
import cat2 from './assets/cat.4002.jpg';
import ProductList from './components/ProductList';

const App = (props) => {
  const [products, setProducts] = useState(
    [
      {
        id: 1,
        src: cat1,
        name: "olsi"
      },
      {
        id: 2,
        src: cat2,
        name: "mosi"
      }
    ]
  )
  return (
    <>
     <NavBar/>
     <ProductList products={products}/>
    </>
  );
};

export default App;
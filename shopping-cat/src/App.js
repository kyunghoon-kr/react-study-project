import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';

const App = (props) => {
  const productName = [
    "ali", "monsi", "hiro", "lisa", "hosin", "papa", "foi", "naomi", "onlize", "chris", "koa", "rust", "react", 
    "vue", "okan", "mila", "allen", "hozi", "cozyco", "lin", "ryn", "kaya", "solini", "ozon", "ryze", "hite",
    "ruby", "go", "cpp", "csharp", "client", "spring", "django", "selenium", "opencv", "oran", "kay", "kei", "jump", "list"
  ];

  const [products, setProducts] = useState([]);
  const sampleArray = [];

  useEffect(() => {
    for(let i=0; i<40; i++) {
      sampleArray.push(
        {
          id: i+1,
          name: productName[i]
        }
      );
    };
    
    setProducts(sampleArray);
  }, [])
  

  return (
    <>
     <NavBar/>
     <ProductList products={products}/>
    </>
  );
};

export default App;
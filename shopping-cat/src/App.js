import React, { useState, useEffect, useCallback } from 'react';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';

const App = (props) => {
  const productName = [
    "ali", "monsi", "hiro", "lisa", "hosin", "papa", "foi", "naomi", "onlize", "chris", "koa", "rust", "react", 
    "vue", "okan", "mila", "allen", "hozi", "cozyco", "lin", "ryn", "kaya", "solini", "ozon", "ryze", "hite",
    "ruby", "go", "cpp", "csharp", "client", "spring", "django", "selenium", "opencv", "oran", "kay", "kei", "jump", "list"
  ];

  const [products, setProducts] = useState([]);
  const [baskets, setBaskets] = useState([]);
  const sampleArray = [];

  useEffect(() => {
    for(let i=0; i<40; i++) {
      let age = Math.floor(Math.random() * 10) + 1;
      sampleArray.push(
        {
          id: i+1,
          name: productName[i],
          age: age,
          isSelected: false,
          amount: 0
        }
      );
    };
    
    setProducts(sampleArray);
  }, [])
  
  const onSelect = useCallback(
    selected => {
      if(!selected.isSelected) // 아직 선택하지 않은 걸 선택할 경우 products 배열을 수정하고 바뀐 값을 baskets에 추가한다.
      {
        setProducts(products.map(product =>
          selected.id === product.id ? {...product, isSelected: true, amount: selected.amount+1}
          : product,
        ));
        setBaskets(baskets.concat({
          ...selected,
          isSelected : true,
          amount : selected.amount + 1
        }));
      } 
      else { // 선택한 걸 또 선택한 경우 baskets 배열에서 amount 값만 증가시킨 후 재렌더링한다.
        setBaskets(baskets.map(basket =>
          selected.id === basket.id ? {...basket, amount: selected.amount+1}
          : basket,
        ));
      }

    }, [products, baskets]
  );

  return (
    <>
     <NavBar baskets={baskets}/>
     <ProductList products={products} onSelect={onSelect}/>
    </>
  );
};

export default App;
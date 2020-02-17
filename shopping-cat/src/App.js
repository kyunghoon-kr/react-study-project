import React, { useState, useEffect, useCallback } from 'react';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import { Route } from 'react-router-dom';

const App = (props) => {
  const productName = [
    "ali", "monsi", "hiro", "lisa", "hosin", "papa", "foi", "naomi", "onlize", "chris", "koa", "rust", "react", 
    "vue", "okan", "mila", "allen", "hozi", "cozyco", "lin", "ryn", "kaya", "solini", "ozon", "ryze", "hite",
    "ruby", "go", "cpp", "csharp", "client", "spring", "django", "selenium", "opencv", "oran", "kay", "kei", "jump", "list"
  ];

  const [products, setProducts] = useState([]);
  const [baskets, setBaskets] = useState([]);
  const sampleArray = [];

  useEffect(() => { // 맨 처음 렌더링 될 때만 state 관리를 위하여 뒤의 배열은 비워둔다.
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
    console.log("useEffect 호출됨!");
    
    setProducts(sampleArray);
  }, [])

  const onAdd = useCallback(
    (selected) => {
      setProducts(products.map(product =>
        selected.id === product.id ? {...product, amount: selected.amount+1}
        : product,
      ));
      setBaskets(baskets.map(basket =>
        selected.id === basket.id ? {...basket, amount: selected.amount+1}
        : basket,
      ));
    }, [products, baskets]
  )

  const onSub = useCallback(
    (selected) => {
      const amount = selected.amount - 1
      // 선택한 제품 개수가 0개가 되면 장바구니에서 삭제하고 isSelected를 원래대로 돌려놓는다.
      if(amount === 0) {
        setBaskets(baskets.filter(basket => basket.id !== selected.id));
        setProducts(products.map(product =>
          selected.id === product.id ? {...product, isSelected:false}
          : product,
        ));
      }
      else {
        setProducts(products.map(product =>
          selected.id === product.id ? {...product, amount: amount}
          : product,
        ));
        setBaskets(baskets.map(basket =>
          selected.id === basket.id ? {...basket, amount: amount}
          : basket,
        ));
      }

      
    }, [products, baskets]
  )

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
      else { // 선택한 걸 또 선택한 경우 amount 값만 증가시킨 후 재렌더링한다.
        onAdd(selected);
      }
    }, [products, baskets, onAdd]
  );
  
  

  return (
    <>
     <NavBar baskets={baskets}/>
     {/* <Route path="/" component={<ProductList products={products} onSelect={onSelect} />}/> */}
     <Route exact path="/" render={()=> <ProductList products={products} onSelect={onSelect}/>}/>
     <Route path="/baskets" render={()=> <ProductList products={baskets} isBasket={true} onAdd={onAdd} onSub={onSub}/>}/>
     {/* <ProductList products={products} onSelect={onSelect}/>  */}
    </>
  );
};

export default App;
import React, { useState, useEffect, useCallback } from 'react';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import SubmitButton from './components/SubmitButton';
import { Route } from 'react-router-dom';
import ProductsContainer from './containers/ProductsContainer';

const App = (props) => {
  const productName = [
    "ali", "monsi", "hiro", "lisa", "hosin", "papa", "foi", "naomi", "onlize", "chris", "koa", "rust", "react", 
    "vue", "okan", "mila", "allen", "hozi", "cozyco", "lin", "ryn", "kaya", "solini", "ozon", "ryze", "hite",
    "ruby", "go", "cpp", "csharp", "client", "spring", "django", "selenium", "opencv", "oran", "kay", "kei", "jump", "list"
  ];

  const [products, setProducts] = useState([]);
  const [baskets, setBaskets] = useState([]);

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
  
  const onSubmit = () => {
    alert('결재가 완료되었습니다.');
    setBaskets([]);
    setProducts(products.map(product =>
        product.isSelected === true ? {...product, isSelected: false, amount: 0}
        : product
    ));
  }
  

  return (
    <>
     <NavBar baskets={baskets}/>
     <Route exact path="/" render={
       ()=> 
          <ProductsContainer isBasket={true} onAdd={onAdd} onSub={onSub}/>
      }/>
     <Route path="/baskets" render={
      ()=> 
        <div>
          {/* <ProductList products={baskets} isBasket={true} onAdd={onAdd} onSub={onSub}/> */}
          {/* <ProductsContainer products={baskets} isBasket={true} onAdd={onAdd} onSub={onSub}/> */}
          <SubmitButton onSubmit={onSubmit}/>
        </div>
     }/>
    </>
  );
};

export default App;
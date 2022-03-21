import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  // const increaseCount = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}
/*
  const products = [
    { name: 'laptop', price: 50000 },
    { name: 'phone', price: 90000 },
    { name: 'watch', price: 33000 },
    { name: 'tablet', price: 5000 }
  ]
*/

/*
{
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
      <Product name="laptop" price="50000"></Product>
      <Product name="phone" price="75000"></Product>
      <Product name="watch" price="35000"></Product>
*/
function Product(props) {
  return (
    <div className='product'>
      <h3>Name : {props.name}</h3>
      <p>Price : {props.price}</p>
    </div>
  )
}

export default App;

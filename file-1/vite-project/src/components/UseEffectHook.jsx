import { useState, useEffect, useCallback } from "react";

function UseEffectHook() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const [products, setProducts] = useState([]);

  async function fetchAllProduct() {
    try {
      const response = await fetch(
        "https://dummyjson.com/products/category/smartphones"
      );
      const result = await response.json();

      if (result && result.products) setProducts(result.products);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    fetchAllProduct();
  }, []);
  useEffect(() => {
    if (count === 5) setShow(true);
  }, [count]);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  return (
    <>
      <h1>Use Effect Hook</h1>
      <p>Count is {count}</p>
      {show ? <h2>Hello World</h2> : null}
      <button onClick={() => increment()}>Increase Count</button>
      <button onClick={() => setCount(count - 1)}>Decrease Count</button>
      <ul>
        {products && products.length > 0
          ? products.map((item) => <li key={item.id}>{item.title}</li>)
          : null}
      </ul>
    </>
  );
}

export default UseEffectHook;

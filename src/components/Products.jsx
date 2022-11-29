import { useEffect } from 'react';
import { useState } from 'react';
import API_URL from '../env/apier';
import Category from './Category';

function Products() {
  const [todo, setTodo] = useState([]);

  //sort of product category array
  /// const cate = todo.map((x) => x.category);
  // const catArr = Array.from(new Set(cate));

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => setTodo(json))
      .catch((error) => console.log(error.message));
  }, []);

  return <div></div>;
}

export default Products;

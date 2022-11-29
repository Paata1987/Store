import { useEffect } from 'react';
import { useState } from 'react';
import API_URL from '../env/apier';

function Products() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => setTodo(json))
      .catch((error) => console.log(error.message));
  }, []);
  console.log(todo);
  return <div></div>;
}

export default Products;

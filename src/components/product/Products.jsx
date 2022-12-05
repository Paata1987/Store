import { useEffect } from 'react';
import { useState } from 'react';
import API_URL from '../../env/apier';

import Product from './Product';
function Products() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())

      .then((json) => setTodo(json))
      .catch((error) => console.log(error.message));
  }, []);

  console.log(todo);
  console.log(setTodo);
  return (
    <div className="container">
      {todo && (
        <div className="row">
          {todo.map((x, index) => (
            <Product key={index} {...x} />
          ))}
        </div>
      )}{' '}
    </div>
  );
}

export default Products;

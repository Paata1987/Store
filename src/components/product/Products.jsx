import { useEffect } from 'react';
import { useState } from 'react';
import API_URL from '../../env/apier';

import Product from './Product';
function Products() {
  const [todo, setTodo] = useState([]);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const setTodo = await fetch(API_URL);
        const post = await setTodo.json();
        setPosts(post);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    }
    fetchData();
  }, []);
  /* 
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())

      .then((json) => setTodo(json))
      .catch((error) => console.log(error.message));
  }, []); */

  console.log(todo);
  console.log(setTodo);

  if (error) {
    return <h1>Error: {error}</h1>;
  }
  return (
    <div className="container">
      <hr />

      <div className="row">
        {isLoading ? (
          <div
            className="spinner-border  spinner-border-sm"
            role="status"
          ></div>
        ) : (
          posts.map((ps) => (
            <Product
              {...ps}
              key={ps.id}
            />
          ))
        )}
        {}
      </div>

      {/*  {todo && (
        <div className="row">
          {todo.map((x, index) => (
            <Product
              key={index}
              {...x}
            />
          ))}
        </div>
      )}{' '} */}
    </div>
  );
}

export default Products;

import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import API_URL from '../../env/apier';

function Category() {
  const [todo, setTodo] = useState([]);
  const preCategoryArrays = todo.map((x) => x.category);
  const categoryArray = [...new Set(Array.from(new Set(preCategoryArrays)))];

  const listCategory = categoryArray.map((categoryItem, index) => (
    <ul
      className="row"
      key={index}
    >
      <Link
        className=""
        key={index}
      >
        {categoryItem}
      </Link>
    </ul>
  ));

  //console.log('catar: ', categoryArray);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => setTodo(json))
      .catch((error) => console.log(error.message));
  }, []);

  return <div className="row">{listCategory}</div>;
}

export default Category;

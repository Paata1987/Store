import { useEffect } from "react";
import { useState } from "react";
import API_URL from "../env/apier";
import Category from "./Category";

function Products() {
  const [todo, setTodo] = useState([]);

  //sort of product category array
  /// const cate = todo.map((x) => x.category);
  // const catArr = Array.from(new Set(cate));

  useEffect(() => {
    fetch(API_URL[1])
      .then((res) => res.json())
      .then((json) => setTodo(json))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div>
      {todo &&
        todo.map((cat, index) => (
          <Category
            key={index}
            {...cat}
          />
        ))}
    </div>
  );
}

export default Products;

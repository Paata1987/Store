import { useEffect } from "react";
import { useState } from "react";
import API_URL from "../env/apier";

function Category(props) {
  const { id, category } = props;
  const [todo, setTodo] = useState([]);

  const cate = todo.map((x) => x.category.split(",").toString());
  const catArr = Array.from(new Set(cate));
  //onsole.log("Todo : ", todo);
  console.log("cattegory : ", catArr);

  useEffect(() => {
    fetch(API_URL[1])
      .then((res) => res.json())
      .then((json) => setTodo(json))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div className="row">
      {catArr.map((x) => {
        <h1>{x}</h1>;
      })}
    </div>
  );
}

export default Category;

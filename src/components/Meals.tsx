import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Meals.css";

const Meals = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setItems(res.data.meals);
        console.log(res.data.meals);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="main-menu">
      {items.map(({ idMeal, strMeal, strMealThumb }) => (
        <div className="itemImage" key={idMeal}>
          <img src={strMealThumb} alt={strMeal} />
          <p>{strMeal}</p>
        </div>
      ))}
    </div>
  );
};

export default Meals;

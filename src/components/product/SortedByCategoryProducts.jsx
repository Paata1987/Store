import React from 'react';
import { useState } from 'react';

const SortedByCategoryPorudcts = () => {
  const [sortCategories, seSortedCategories] = useState([]);
  const preSortedCategoryArrays = sortCategories.map((x) => x.category);
  const sortedCategoryArray = [
    ...new Set(Array.from(new Set(preSortedCategoryArrays))),
  ];

  sortedCategoryProducts = sortedCategoryArray.map((categoryItem, index) => {
    categoryItem;
  });

  return <div></div>;
};

export default SortedByCategoryPorudcts;

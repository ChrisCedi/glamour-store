import { useState } from "react";

export const useProductDetail = () => {
  let [count, setCount] = useState(1);

  const addItem = () => {
    setCount(++count);
  };

  const restItem = () => {
    setCount(--count);
  };

  return { addItem, restItem, count };
};

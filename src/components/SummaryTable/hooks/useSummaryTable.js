import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../../redux/slices/products";

export const useSummaryTable = () => {
  const dispatch = useDispatch();
  const { inCart } = useSelector((state) => state.products);

  const [cart, setCart] = useState({ list: [...inCart.list] });

  const handleDecrement = (index) => {
    const updatedCart = [...cart.list];
    updatedCart[index] = {
      ...updatedCart[index],
      count: updatedCart[index].count - 1,
    };
    let total = 0;
    updatedCart.forEach((value) => {
      total += value.count;
    });
    setCart({ list: updatedCart });
    dispatch(addProduct({ total, list: updatedCart }));
  };

  const handleIncrement = (index) => {
    const updatedCart = [...cart.list];
    updatedCart[index] = {
      ...updatedCart[index],
      count: updatedCart[index].count + 1,
    };
    let total = 0;
    updatedCart.forEach((value) => {
      total += value.count;
    });
    setCart({ list: updatedCart });
    dispatch(addProduct({ total, list: updatedCart }));
  };
  return { cart, inCart, handleDecrement, handleIncrement };
};

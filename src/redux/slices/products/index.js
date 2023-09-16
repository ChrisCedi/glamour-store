import { createSlice } from "@reduxjs/toolkit";
import { productsApi } from "../../../api/productsApi";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    productsList: [],
  },
  reducers: {
    setProductList: (state, action) => {
      state.productsList = action.payload;
    },
  },
});

export const { setProductList } = productsSlice.actions;

export default productsSlice.reducer;

export const getProducts = () => async (dispatch) => {
  try {
    const response = await productsApi.get();
    dispatch(setProductList(response.data));
  } catch (error) {
    console.log(error);
  }
};

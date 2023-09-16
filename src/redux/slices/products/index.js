import { createSlice } from "@reduxjs/toolkit";
import { productsApi } from "../../../api/productsApi";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    productsList: [],
    productDetail: {},
    inCart: {
      total: 0,
      list: [],
    },
  },
  reducers: {
    setProductList: (state, action) => {
      state.productsList = action.payload;
    },
    setProductDetail: (state, action) => {
      state.productDetail = action.payload;
    },
    setInCart: (state, action) => {
      state.inCart = action.payload;
    },
  },
});

export const { setProductList, setProductDetail, setInCart } =
  productsSlice.actions;

export default productsSlice.reducer;

export const getProducts = () => async (dispatch) => {
  try {
    const response = await productsApi.get();
    dispatch(setProductList(response.data));
  } catch (error) {
    console.log(error);
  }
};

export const getProductDetail = (id) => async (dispatch) => {
  try {
    const response = await productsApi.get(`${id}`);
    dispatch(setProductDetail(response.data));
  } catch (error) {
    console.log(error);
  }
};

export const addProduct = (product) => (dispatch) => {
  try {
    dispatch(setInCart(product));
  } catch (error) {
    console.log(error);
  }
};

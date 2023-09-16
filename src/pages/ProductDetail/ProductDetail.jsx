import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail, addProduct } from "../../redux/slices/products";
import { useStyles } from "./ProductDetailStyles";
import { Grid, Typography, Button } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { useProductDetail } from "./hooks/useProductDetail";

export const ProductDetail = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { productDetail, inCart } = useSelector((state) => state.products);
  const { title, price, image, description, rating } = productDetail;
  const { addItem, restItem, count } = useProductDetail();

  useEffect(() => {
    dispatch(getProductDetail(id));
  }, []);

  const handleAddtoCart = () => {
    let productAdded = { title: title, count, image, price };
    let newList = [...inCart.list, productAdded];
    let total = 0;
    newList.forEach((valor) => {
      total += valor.count;
    });
    dispatch(addProduct({ total, list: newList }));
  };

  const { id } = useParams();

  return (
    <div className={classes.container}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={6} className={classes.gridImage}>
          <img src={image} alt={title} className={classes.image} />
        </Grid>
        <Grid item xs={12} md={6} className={classes.gridDetails}>
          <Typography variant="h4" className={classes.productName}>
            {title}
          </Typography>
          <div className={classes.boxRating}>
            <Typography variant="h6" className={classes.price}>
              $ {price}
            </Typography>
            <Rating name="read-only" value={rating?.rate} readOnly />
          </div>
          <Typography>{description}</Typography>
          <div className={classes.boxItems}>
            <Button
              color="primary"
              variant="contained"
              onClick={restItem}
              disabled={count === 1}
            >
              -
            </Button>
            <Typography className={classes.count}>{count}</Typography>
            <Button color="primary" variant="contained" onClick={addItem}>
              +
            </Button>
          </div>
          <Button
            fullWidth
            color="primary"
            variant="contained"
            onClick={handleAddtoCart}
          >
            Agregar
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

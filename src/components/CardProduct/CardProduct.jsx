import React from "react";
import { Card, CardMedia, Typography } from "@material-ui/core";
import { useStyles } from "./CardStyles";

export const CardProduct = ({ product }) => {
  const classes = useStyles();
  const { title, price, image } = product;

  return (
    <div className={classes.card}>
      <img src={image} alt={title} className={classes.image} />
      <Typography className={classes.title}>{title}</Typography>
      <Typography>{price}</Typography>
    </div>
  );
};

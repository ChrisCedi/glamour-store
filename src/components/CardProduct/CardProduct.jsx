import React from "react";
import { Card, CardMedia, Typography } from "@material-ui/core";
import { useStyles } from "./CardStyles";
import { useNavigate } from "react-router-dom";

export const CardProduct = ({ product }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { id, title, price, image } = product;

  return (
    <div className={classes.card} onClick={() => navigate(`/${id}`)}>
      <img src={image} alt={title} className={classes.image} />
      <Typography className={classes.title}>{title}</Typography>
      <Typography>$ {price}</Typography>
    </div>
  );
};

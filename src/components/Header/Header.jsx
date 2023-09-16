import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import { useStyles } from "./HeaderStyles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector } from "react-redux";

export const Header = () => {
  const classes = useStyles();
  const { inCart } = useSelector((state) => state.products);

  return (
    <AppBar>
      <Toolbar className={classes.header}>
        <Typography>Glamour store</Typography>{" "}
        <Button startIcon={<ShoppingCartIcon />}>{inCart?.total}</Button>
      </Toolbar>
    </AppBar>
  );
};

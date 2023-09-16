import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import { useStyles } from "./HeaderStyles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export const Header = () => {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar className={classes.header}>
        <Typography>Glamour store</Typography>{" "}
        <Button startIcon={<ShoppingCartIcon />}>{0}</Button>
      </Toolbar>
    </AppBar>
  );
};

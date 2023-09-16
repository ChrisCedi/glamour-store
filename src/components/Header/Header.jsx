import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import { useStyles } from "./HeaderStyles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Header = () => {
  const classes = useStyles();
  const { inCart } = useSelector((state) => state.products);

  return (
    <AppBar>
      <Toolbar className={classes.header}>
        <Link to={"/"} className={classes.title}>
          <Typography variant="h6">Glamour store</Typography>
        </Link>
        <Link to={"/summary"}>
          <Button color="primary" startIcon={<ShoppingCartIcon />}>
            {inCart?.total}
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import { useStyles } from "./HeaderStyles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Header = () => {
  const classes = useStyles();
  const { inCart } = useSelector((state) => state.products);
  const [color, setColor] = useState(false);

  useEffect(() => {
    setColor(!color);
  }, [inCart?.total]);

  return (
    <AppBar>
      <Toolbar className={classes.header}>
        <Link to={"/"} className={classes.title}>
          <Typography variant="h6">Glamour store</Typography>
        </Link>
        <Link to={"/summary"}>
          <Button
            color={color ? "primary" : "secondary"}
            startIcon={<ShoppingCartIcon />}
          >
            {inCart?.total}
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

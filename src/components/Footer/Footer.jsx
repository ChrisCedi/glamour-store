import React from "react";
import { useStyles } from "./FooterStyles";
import { Typography } from "@material-ui/core";

export const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Typography className={classes.textFooter}>
        Todos los derechos reservados. 2023
      </Typography>
    </div>
  );
};

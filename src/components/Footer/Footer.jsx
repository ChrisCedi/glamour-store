import React from "react";
import { useStyles } from "./FooterStyles";

export const Footer = () => {
  const classes = useStyles();
  return <div className={classes.footer}>Footer</div>;
};

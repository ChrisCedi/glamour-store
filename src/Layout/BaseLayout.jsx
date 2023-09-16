import React from "react";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { useStyles } from "./BaseLayoutStyles";

export const BaseLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <div className={classes.body}>{children}</div>
      <Footer />
    </div>
  );
};

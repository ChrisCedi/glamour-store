import React from "react";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { useStyles } from "./BaseLayoutStyles";
import { Container } from "@material-ui/core";

export const BaseLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <Container className={classes.body}>{children}</Container>
      <Footer />
    </div>
  );
};

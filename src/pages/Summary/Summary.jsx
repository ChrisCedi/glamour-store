import React from "react";
import { SummaryTable } from "../../components/SummaryTable/SummaryTable";
import { Typography } from "@material-ui/core";
import { useStyles } from "./SummaryStyles";

export const Summary = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography className={classes.title} variant="h4">
        Resumen de tu carrito
      </Typography>
      <SummaryTable />
    </div>
  );
};

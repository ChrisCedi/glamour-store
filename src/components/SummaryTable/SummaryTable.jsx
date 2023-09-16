import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
} from "@material-ui/core";
import { useStyles } from "./SummaryTableStyles";
import { useSummaryTable } from "./hooks/useSummaryTable";

export const SummaryTable = () => {
  const classes = useStyles();
  const { cart, inCart, handleDecrement, handleIncrement } = useSummaryTable();

  return (
    <div className={classes.tableContainer}>
      {inCart.list.length > 0 ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">Nombre del Producto</TableCell>
                <TableCell align="center">Precio</TableCell>
                <TableCell align="center">Cantidad</TableCell>
                <TableCell align="center">Subtotal</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart?.list.map((product, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <div className={classes.productName}>
                      <Typography> {product.title}</Typography>
                      <img
                        src={product.image}
                        className={classes.image}
                        alt="product"
                      />
                    </div>
                  </TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>
                    <div className={classes.boxItems}>
                      <Button
                        color="primary"
                        variant="contained"
                        disabled={product.count === 1}
                        onClick={() => handleDecrement(index)}
                      >
                        -
                      </Button>
                      <Typography className={classes.count}>
                        {product.count}
                      </Typography>
                      <Button
                        color="primary"
                        variant="contained"
                        onClick={() => handleIncrement(index)}
                      >
                        +
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>{product.price * product.count}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography>No hay productos en el carrito</Typography>
      )}
    </div>
  );
};

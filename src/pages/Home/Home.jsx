import { useEffect } from "react";
import { getProducts } from "../../redux/slices/products";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Grid, Container } from "@material-ui/core";
import { CardProduct } from "../../components/CardProduct/CardProduct";
import { useStyles } from "./HomeStyles";

export const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { productsList } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Container className={classes.container}>
      <Typography className={classes.title} variant="h3">
        Los mejores lanzamientos
      </Typography>
      <Grid container spacing={4}>
        {productsList.map((product, index) => (
          <Grid item xs={12} sm={6} md={3}>
            <CardProduct product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

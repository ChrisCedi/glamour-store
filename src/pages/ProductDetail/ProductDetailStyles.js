import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    height: "100%",
  },
  gridImage: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(4),
  },
  image: {
    height: "65vh",
    width: "60%",
    [theme.breakpoints.down("xs")]: {
      height: "90%",
      width: "60%",
    },
  },
  gridDetails: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "75vh",
    padding: theme.spacing(6),
    [theme.breakpoints.down("xs")]: {
      height: "85%",
    },
  },
  boxRating: {
    display: "flex",
    alignItems: "center",
  },
  productName: {
    fontSize: "20px",
  },
  price: {
    paddingRight: theme.spacing(8),
  },
  boxItems: {
    display: "flex",
    alignItems: "center",
    padding: "20px 0px",
  },
  count: {
    padding: "0px 14px",
  },
}));

export { useStyles };

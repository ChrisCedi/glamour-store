import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    [theme.breakpoints.down("sm")]: {
      overflowX: "auto",
      maxWidth: "100%",
    },
  },
  image: {
    height: "45px",
    width: "45px",
  },
  price: {
    paddingRight: theme.spacing(8),
  },
  productName: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 250,
  },
  boxItems: {
    display: "flex",
    alignItems: "center",
  },
  count: {
    padding: "0px 14px",
  },
}));

export { useStyles };

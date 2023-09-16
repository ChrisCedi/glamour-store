import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    height: 190,
    backgroundColor: "black",
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textFooter: {
    color: "white",
  },
}));

export { useStyles };

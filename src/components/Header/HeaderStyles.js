import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    textDecoration: "none",
    color: "black",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.1)",
      cursor: "pointer",
    },
  },
  buttonSummary: {
    color: "red",
  },
}));

export { useStyles };

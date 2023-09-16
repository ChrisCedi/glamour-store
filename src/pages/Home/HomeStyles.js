import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    height: "100vh",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    padding: theme.spacing(4),
  },
}));

export { useStyles };

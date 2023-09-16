import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    height: "100%",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: theme.spacing(8),
  },
  title: {
    padding: theme.spacing(4),
  },
}));

export { useStyles };

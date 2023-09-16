import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "290px",
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.1)",
      cursor: "pointer",
    },
  },
  image: {
    height: 200,
    minWidth: "150px",
    maxWidth: "180px",
  },
  title: {
    textAlign: "center",
    fontWeight: 600,
    padding: theme.spacing(1),
  },
}));

export { useStyles };

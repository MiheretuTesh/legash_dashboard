import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "30px",
    marginTop: "54px",
    overflowY: "auto",
    maxHeight: "450px",
    "@media (max-width: 1200px)": {
      gridTemplateColumns: "1fr",
    },
    "@media (min-height: 670px)": {
      maxHeight: "550px",
    },
  },

  noContent: {
    fontSize: "18px",
    display: "flex",
    fontStyle: "italic",
    color: "#777777",
  },
});

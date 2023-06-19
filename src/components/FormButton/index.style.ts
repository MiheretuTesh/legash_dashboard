import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  btnContainer: {
    width: "100%",
    height: "51px",
    "&.MuiButton-contained": {
      textTransform: "none",
      background: "#32E9DA",
      boxShadow: "none",
      borderRadius: "10px",
      fontFamily: "Roboto",
      fontSize: "18px",
      color: "#003444",
      "&:hover": {
        background: "#003444",
        boxShadow: "none",
        color: "#FEFEFE",
      },
    },
  },
  terminateContainer: {
    width: "100%",
    height: "51px",
    "&.MuiButton-contained": {
      textTransform: "none",
      background: "#ab0707",
      boxShadow: "none",
      borderRadius: "10px",
      fontFamily: "Roboto",
      fontSize: "18px",
      color: "#fff",
      "&:hover": {
        background: "#ab0707",
        boxShadow: "none",
        color: "#FEFEFE",
      },
    },
  },
});

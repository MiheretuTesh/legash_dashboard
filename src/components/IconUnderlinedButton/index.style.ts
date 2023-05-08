import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  btnContainer: {
    "&.MuiButton-outlined": {
      fontFamily: "Roboto",
      fontSize: "16px",
      lineHeight: "19px",
      textDecorationLine: "underline",
      color: "#003444",
      textTransform: "none",
      border: "none",
      padding: "10px",
      height: "22px",
      "&:hover": {
        textDecorationLine: "underline",
        border: "none",
      },
      "&:disabled": {
        border: "none",
        color: "#D6E3E6",
      },
    },
  },
  field:{}
});

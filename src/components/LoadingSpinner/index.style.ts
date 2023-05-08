import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& .MuiCircularProgress-root": {
      color: "#003444",
    },
  },
  pageLoading: {
    height: "100vh",
  },
  btnLoading: {
    "& .MuiCircularProgress-root": {
      color: "#FFFFFF",
    },
  },
  submitBtn:{
    "& .MuiCircularProgress-root": {
      color: "#949493",
    },
  },
  textLoading: {
    height: "auto",
    "& .MuiCircularProgress-root": {
      color: "#003444",
    },
  },
});

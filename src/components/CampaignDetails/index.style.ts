import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    width: "55%",
    display: "flex",
    flexDirection: "row",
    padding: "25px",
    marginTop: "30px",
    background: "#FEFEFE",
    border: "1px solid #D6E3E6",
    borderRadius: "10px",
    "@media (max-width: 900px)": {
      width: "auto",
    },
  },
  profilePictureContainer: {
    display: "flex",
    flexDirection: "column",
  },
  pictureContainer: {
    width: "148px",
    height: "148px",
    borderRadius: "50%",
  },
  uploadBtn: {
    "&.MuiButton-outlined": {
      marginTop: "15px",
      fontFamily: "RobotoBold",
      color: "#333 !important",
    },
  },
  loaderStyle: {
    display: "flex",

    flexDirection: "row",

    justifyContent: "center",

    alignItems: "center",

    width: "100%",
  },
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
});

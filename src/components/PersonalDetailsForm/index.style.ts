import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  topContainer: {
    display: "flex",
    justifyContent: "space-between",
    maxHeight: "500px",
    width: "100%",
    overflowY: "auto",
    "@media (max-width: 1200px)": {
      flexDirection: "column",
    },
    "@media (max-height: 700px)": {
      maxHeight: "345px",
    },
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    marginLeft: "57px",
    "@media (max-width: 1200px)": {
      marginLeft: "0px",
    },
  },
  formField: {
    "@media (max-height: 680px)": {
      height: "46px",
    },
  },
  formSelectField: {
    "@media (max-height: 680px)": {
      height: "32px !important",
    },
  },
  actionBtnsContainer: {
    display: "flex",
    width: "40%",
    flexDirection: "row",
    marginTop: "10px",
  },
  cancelBtn: {
    "&.MuiButton-outlined": {
      height: "100%",
      marginLeft: "20px",
    },
  },
  uploadBtn: {
    "&.MuiButton-outlined": {
      marginTop: "15px",
      fontFamily: "RobotoBold",
      color: "#333 !important",
    },
  },
  profilePictureContainer: {
    display: "flex",
    flexDirection: "column",
    "@media (max-width: 1200px)": {
      alignItems: "center",
    },
  },
  pictureContainer: {
    width: "148px",
    height: "148px",
    borderRadius: "50%",
  },
});

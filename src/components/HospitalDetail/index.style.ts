import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  topContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    // maxHeight: "500px",
    width: "100%",
    overflowY: "auto",
    "@media (max-width: 1200px)": {
      flexDirection: "column",
    },
    "@media (max-height: 700px)": {
      maxHeight: "345px",
    },
  },
  formMainContainer: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    marginLeft: "10px",
    marginTop: "50px",
    justifyContent: "space-between",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    width: "45%",
    // marginLeft: "10px",
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
    flexDirection: "row",
    alignItems: "flex-end",
  },
  pictureContainer: {
    width: "30%",
    height: "10%",
    margin: "0 10px",
  },
});

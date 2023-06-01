import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "80%",
    height: "400px",
    "@media (max-width: 900px)": {
      width: "100%",
    },
  },
  secondContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    "@media (max-width: 1200px)": {
      flexDirection: "column",
    },
  },
  fullWidth: { width: "100%" },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    margin: "20px",
    width: "100%",
    justifyContent: "space-around",
  },
  formContainer2: {
    display: "flex",
    flexDirection: "row",
    margin: "20px",
    width: "100%",
    justifyContent: "space-around",
  },
  textField: { width: "80%" },
  imageUploadContainer: {
    display: "flex",
    flexDirection: "row",
    margin: "20px",
    width: "100%",
    paddingLeft: "110px",
  },
  customBtnStyle: { width: "200px" },
});

import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  formContainer: {
    display: "flex",
    flexDirection: "column",
  },
  buildingChoiceContainer: {
    width: "250px !important",
    marginBottom: "0px",
  },
  nextPageBtn: {
    "&.MuiButton-contained": {
      width: "140px",
    },
  },
  progressBar: {
    marginTop: "30px !important",
    marginBottom: "30px !important",
  },
  btnsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "30px",
    "@media (max-width: 565px)": {
      flexDirection: "column-reverse",
    },
  },
  rightBtnsContainer: {
    "@media (max-width: 565px)": {
      marginBottom: "20px",
    },
  },
  cancelBtn: {
    "&.MuiButton-outlined": {
      height: "51px",
      marginLeft: "20px",
    },
  },
  backBtn: {
    width: "140px",
    height: "51px",
    "&.MuiButton-outlined": {
      marginRight: "20px",
      textTransform: "none",
      border: "1px solid #003444",
      background: "transparent",
      borderRadius: "10px",
      fontFamily: "Roboto",
      fontSize: "18px",
      lineHeight: "21px",
      color: "#003444",
      "&:hover": {
        background: "#003444",
        color: "#FEFEFE",
        border: "1px solid #003444",
      },
    },
  },
  loaderStyle: {
    fontSize: "15px",
  },
});

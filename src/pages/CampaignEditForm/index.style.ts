import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  selectField: {
    marginTop: "50px",
    width: "20% !important",
    marginBottom: "0px !important",
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
  saveBtn: {
    "&.MuiButton-contained": {
      width: "140px",
    },
  },
  cancelBtn: {
    "&.MuiButton-outlined": {
      height: "51px",
      marginLeft: "20px",
    },
  },
  backBtn: {
    "&.MuiButton-outlined": {
      width: "125px",
      height: "51px",
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

  buildingChoiceContainer: {
    width: "250px !important",
    marginBottom: "0px",
  },
  loaderStyle: {
    color: "#FFF",
    backgroundColor: "#FFF",
    fontSize: "15px",
  },
});

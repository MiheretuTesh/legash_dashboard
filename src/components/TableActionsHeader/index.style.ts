import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "54px",
    "@media (max-width: 1200px)": {
      flexDirection: "column",
    },
    "@media (max-width: 900px)": {
      marginTop: "0px",
    },
  },
  editDeleteContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  selectedTxt: {
    fontFamily: "Roboto",
    fontSize: "16px",
    lineHeight: "19px",
    color: "#86989D",
  },
  actionBtn: {
    "&.MuiButton-outlined": {
      fontFamily: "Roboto",
      fontSize: "16px",
      lineHeight: "19px",
      textDecorationLine: "underline",
      color: "#003444",
      textTransform: "none",
      border: "none",
      marginLeft: "35px",
      padding: "10px",
      height: "22px",
      "@media (max-width: 900px)": {
        marginLeft: "20px",
      },
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
  lessMargin: {
    "&.MuiButton-outlined": {
      marginLeft: "24px",
      "@media (max-width: 900px)": {
        marginLeft: "15px",
      },
    },
  },
  searchAddContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  searchContainer: {
    display: "flex",
    flexDirection: "row",
    maxWidth: "360px",
    minWidth: 0,
    height: "44px",
    background: "#FEFEFE",
    border: "1px solid #D6E3E6",
    borderRadius: "10px",
    padding: "0px 17px",
    alignItems: "center",
  },
  searchIcon: {
    width: "18px",
    height: "18px",
  },
  input: {
    border: "none",
    outline: "none",
    marginLeft: "14px",
    fontFamily: "Roboto",
    fontSize: "16px",
    lineHeight: "19px",
    minWidth: "90%",
    backgroundColor: "transparent",
    "&::placeholder": {
      color: "#D6E3E6",
    },
  },
  addBtn: {
    "&.MuiButton-contained": {
      width: "180px",
      height: "51px",
      marginLeft: "30px",
      textTransform: "none",
      background: "#32E9DA",
      borderRadius: "10px",
      fontFamily: "Roboto",
      fontSize: "18px",
      lineHeight: "21px",
      color: "#003444",
      boxShadow: "none",
      "@media (max-width: 900px)": {
        fontSize: "16px",
      },
      "&:hover": {
        background: "#003444",
        color: "#FEFEFE",
        boxShadow: "none",
      },
    },
  },
});

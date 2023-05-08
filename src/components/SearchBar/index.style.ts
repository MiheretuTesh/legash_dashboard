import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
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
    minWidth: "94%",
    "&::placeholder": {
      color: "#D6E3E6",
    },
  },
});

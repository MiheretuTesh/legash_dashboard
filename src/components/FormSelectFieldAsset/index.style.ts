import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  formFieldContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    marginBottom: "20px",
    position: "relative",
  },
  label: {
    fontFamily: "Roboto",
    fontSize: "14px",
    color: "#86989D",
    marginBottom: "5px",
  },

  field: {
    width: "100%",
  },

  select: {
    height: "44px",
    background: "#FEFEFE",
    "&& fieldset": {
      borderRadius: "10px",
    },
    "&.Mui-focused": {
      border: "1px solid #D6E3E6",
      borderRadius: "10px",
      "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
      "&:hover": {
        "&& fieldset": {
          border: "none",
        },
      },
    },
    "&:hover": {
      "&& fieldset": {
        border: "1px solid #D6E3E6",
      },
    },

    "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
      {
        padding: "0px 12px",
        textAlign: "left",
        fontFamily: "Roboto",
        fontSize: "16px",
        color: "#003444",
      },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #D6E3E6",
    },
  },

  dropdownMenuContainer: {
    "& ul": {
      background: "#FEFEFE",
    },
    "& li": {
      fontFamily: "Roboto",
      fontSize: "16px",
      color: "#003444",
      whiteSpace: "initial",
      "&:hover": {
        backgroundColor: "rgba(25, 118, 210, 0.12)",
      },
    },
    "& .css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root.Mui-selected": {
      backgroundColor: "#003444",
      color: "#FFFFFF",
    },
    "& .css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root.Mui-selected:hover": {
      backgroundColor: "#003444",
      color: "#FFFFFF",
    },
  },

  errorMessageTxt: {
    fontFamily: "Roboto",
    fontSize: "12px",
    color: "#FF9494",
    margin: 0,
    position: "absolute",
    top: 68,
    right: 0,
  },
  errorMessageTxtNoLabel: {
    top: 45,
  },
});

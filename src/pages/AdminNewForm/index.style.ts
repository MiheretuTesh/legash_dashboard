import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  field: {
    width: "250px",
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
  nextPageBtn: {
    "&.MuiButton-contained": {
      width: "140px",
    },
  },
  errorMessageTxt: {
    fontFamily: "Roboto",
    fontSize: "12px",
    color: "#FF9494",
    margin: 0,
    position: "absolute",
    top: 50,
    right: 10,
  },

  nextButton: {
    display: "flex",
    justifyContent: "flex-start",
  },
});

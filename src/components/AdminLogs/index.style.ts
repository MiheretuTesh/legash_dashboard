import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    gap: "20px",
    marginTop: "54px",
    flexWrap: "wrap",
    justifyContent: "space-between",
    height: "500px",
    backgroundColor: "#FEFEFE",
    overflowY: "scroll",
    padding: "15px",
    borderRadius: "10px",
    border: "1px solid #D6E3E6",
    "@media (max-height: 670px)": {
      height: "340px",
    },
  },

  logHolder: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: "20px",
    width: "100%",
    background: "#FEFEFE",
    border: "1px solid #D6E3E6",
    borderRadius: "10px",
  },

  formattedDate: {
    alignSelf: "flex-end",
    fontWeight: "500",
  },
  formattedDateTime: {
    alignSelf: "flex-end",
    fontWeight: "500",
  },

  logMsg: {
    fontWeight: "600",
  },

  loaderStyle: {
    display: "flex",

    flexDirection: "column",

    justifyContent: "center",

    alignItems: "center",

    width: "100%",

    height: "100%",
  },
});

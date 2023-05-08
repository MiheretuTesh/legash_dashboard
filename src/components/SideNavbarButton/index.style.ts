import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: "50px",
    background: "transparent",
    outline: "none",
    borderRadius: "10px",
    fontFamily: "Roboto",
    fontSize: "18px",
    color: "#B2C2C7",
    padding: "0 15px",
    border: "none",
    cursor: "pointer",
    "&:hover": {
      background: "rgba(217,217,217, 0.1)",
      fill: "rgba(217,217,217, 0.1)",
    },
    marginBottom: "5px",
    margin: "30px 0",
  },
  buttonSelected: {
    background: "rgba(217,217,217, 0.2)",
    "&:hover": { background: "rgba(217,217,217, 0.5)" },
  },
  img: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "18px",
  },
});

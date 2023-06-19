import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 0px 20px 0px",
    borderBottom: "1px solid #D6E3E6",
  },
  label: {
    fontFamily: "Roboto",
    fontSize: "18px",
    lineHeight: "21px",
    color: "#003444",
    textAlign: "left",
  },
  field: {
    marginBottom: "0px",
    width: "60%",
  },
});

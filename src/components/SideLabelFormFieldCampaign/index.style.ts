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
  fieldContainer: {
    display: "flex",
    flexDirection: "row",
    width: "60%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  field: {
    marginBottom: "0px",
    width: "100%",
  },
  unit: {
    margin: 0,
    fontFamily: "RobotoBold",
    fontSize: "18px",
    color: "#003444",
    marginLeft: "10px",
  },
});

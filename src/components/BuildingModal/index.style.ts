import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  modalContainer: {
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "400px",
    background: "#FFFFFF",
    borderRadius: "10px",
    padding: "20px",
  },
  formHeader: {
    margin: 0,
    marginBottom: "25px",
    fontFamily: "PoppinsBold",
    fontSize: "28px",
    color: "#003444",
  },
  cancelBtn: {
    position: "absolute",
    top: "5px",
    right: "5px",
  },
  dropdownMenu: {
    height: "200px",
  },
});

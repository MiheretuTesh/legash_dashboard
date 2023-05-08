import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  modalContainer: {
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "450px",
    background: "#FFFFFF",
    borderRadius: "10px",
    padding: "40px 20px 20px",
  },
  question: {
    fontFamily: "Roboto",
    fontSize: "18px",
    lineHeight: "21px",
    color: "#003444",
    margin: 0,
  },
  actionBtn: {
    width: "30%",
  },
  cancelBtn: {
    position: "absolute",
    top: "5px",
    right: "5px",
  },
  actionBtnsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  loadingSpinnerContainer: {
    margin: "20px 0",
  },
});

import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "30px 0px",
    background: "#f7fcfb",
  },
  sectionContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  reportContainer: {
    height: "500px",
    width: "890px",
    "@media (max-width: 1290px)": {
      height: "450px",
      width: "800px",
    },
    "@media (max-width: 1190px)": {
      height: "400px",
      width: "710px",
    },
    "@media (max-width: 1090px)": {
      height: "350px",
      width: "620px",
    },
    "@media (max-width: 990px)": {
      height: "300px",
      width: "530px",
    },
    "@media (max-width: 590px)": {
      height: "250px",
      width: "440px",
    },
    "@media (max-width: 490px)": {
      height: "200px",
      width: "350px",
    },
    "@media (max-width: 390px)": {
      height: "150px",
      width: "260px",
    },
  },
  fullScreenBtn: {
    width: "180px",
    alignSelf: "center",
    marginTop: "20px !important",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: 20,
  },
  backBtn: {
    "&.MuiButton-outlined": {
      width: "125px",
      height: "51px",
      marginRight: "20px",
      textTransform: "none",
      border: "1px solid #003444",
      background: "transparent",
      borderRadius: "10px",
      fontFamily: "Roboto",
      fontSize: "18px",
      lineHeight: "21px",
      color: "#003444",
      "&:hover": {
        background: "#003444",
        color: "#FEFEFE",
        border: "1px solid #003444",
      },
    },
  },
});

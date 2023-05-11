import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: "25px",
    height: "150px",
    background: "#FEFEFE",
    // border: "1px solid #D6E3E6",
    borderRadius: "10px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    width: "25%",
    marginBottom: "30px",
    "&:hover": {
      background: "#5DADAA",
      fill: "rgba(217,217,217, 0.1)",
      color: "#fff",
    },
    "@media (max-width: 1400px)": {
      width: "40%",
    },
    "@media (max-width: 1500px)": {
      width: "40%",
    },
    "@media (max-width: 710px)": {
      width: "100%",
    },
  },

  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    "&:hover": {
      color: "#fff",
    },
  },

  headerText: {
    margin: 0,
    fontFamily: "Roboto",
    fontSize: "16px",
    lineHeight: "18px",
    color: "#003444",
  },

  paleHeaderText: {
    margin: 0,
    fontFamily: "Roboto",
    fontSize: "16px",
    lineHeight: "19px",
    color: "#86989D",
  },

  horizontalNum: {
    display: "flex",
    justifyContent: "space-between",
    width: "80%",
    paddingLeft: "25px",
  },

  verticalNum: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    height: "75%",
  },

  cardTxt: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "60px",
    "@media (max-width: 1200px)": {
      fontSize: "40px",
    },
    "@media (max-width: 1500px)": {
      fontSize: "40px",
    },
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

import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    padding: "0px 60px",
    position: "relative",
    "@media (max-width: 900px)": {
      padding: "0px 30px",
    },
  },
  detailsContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    "@media (max-width: 900px)": {
      flexDirection: "column-reverse",
      alignItems: "center",
    },
  },
  headerTxt: {
    fontFamily: "Poppins",
    fontSize: "32px",
    lineHeight: "42px",
    color: "#003444",
    margin: 0,
    "@media (max-width: 900px)": {
      marginTop: "10px",
    },
  },
  headerRightContainer: {
    display: "flex",
    flexDirection: "row",
    "@media (max-width: 900px)": {
      flexDirection: "row-reverse",
    },
  },
  iconBtnContainer: {
    width: "40px",
    height: "40px",
  },
  notificationsBtnContainer: {
    position: "relative",
  },
  greenCircle: {
    width: "5px",
    height: "5px",
    position: "absolute",
    top: "25%",
    right: "20%",
    borderRadius: "50%",
    background: "#09B425",
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: "30px",
    borderLeft: "1px solid #D6E3E6",
    marginLeft: "30px",
    "@media (max-width: 900px)": {
      paddingLeft: "0px",
      marginLeft: "0px",
      paddingRight: "10px",
      marginRight: "10px",
      borderLeft: "none",
      borderRight: "1px solid #D6E3E6",
    },
  },
  nameRoleContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  roleTxt: {
    fontFamily: "Roboto",
    fontSize: "14px",
    lineHeight: "16px",
    color: "#86989D",
    margin: 0,
    "@media (max-width: 900px)": {
      fontSize: "10px",
    },
  },
  nameTxt: {
    fontFamily: "Roboto",
    fontSize: "18px",
    lineHeight: "21px",
    color: "#003444",
    margin: 0,
    marginTop: "5px",
    "@media (max-width: 900px)": {
      fontSize: "12px",
      marginTop: "0px",
    },
  },
  profilePicture: {
    width: "50px",
    height: "44px",
    borderRadius: "44px",
    marginLeft: "15px",
    cursor: "pointer",
  },
});

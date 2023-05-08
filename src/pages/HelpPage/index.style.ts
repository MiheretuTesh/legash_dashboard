import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
    helpPage: {
        display: "flex",
        justifyContent: "center",
    },
    pageContainer: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: "680px",
        justifyContent: "center",
        paddingTop: 30,
    },
    pageHeader: {
        margin: 0,
        marginBottom: "10px",
        fontFamily: "PoppinsBold",
        fontSize: "26px",
        lineHeight: "32px",
        color: "#003444",
    },
    pageSubheader: {
        margin: 0,
        fontFamily: "Roboto",
        fontSize: "18px",
        lineHeight: "21px",
        textAlign: "left",
        color: "#003444",
    },
    subPageContent:{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: "650px",
        justifyContent: "center",
        paddingLeft: 30,
    }
});

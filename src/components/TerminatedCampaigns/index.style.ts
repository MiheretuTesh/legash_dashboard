import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  tableContainer: {
    height: "421px",
    width: "100%",
    marginTop: "30px",
    "& .MuiDataGrid-root": {
      padding: "5px 25px",
      outline: "none !important",
      background: "#FEFEFE",
      border: "1px solid #D6E3E6",
      borderRadius: "10px",
    },
    "& .MuiDataGrid-root .MuiDataGrid-cell:focus": {
      outline: "none",
    },
    "& .MuiDataGrid-root .MuiDataGrid-columnHeader:focus": {
      outline: "none",
    },
    "& .MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
      outline: "none",
    },
    "& .MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within": {
      outline: "none",
    },
    "& .MuiDataGrid-row": {
      fontFamily: "Roboto",
      fontSize: "18px",
      lineHeight: "21px",
      color: "#003444",
    },
    "& .MuiDataGrid-row.Mui-selected": {
      backgroundColor: "#F1FAF8 !important",
    },
    "& .MuiDataGrid-columnHeaders": {
      fontFamily: "RobotoBold",
      fontSize: "16px",
      lineHeight: "19px",
      color: "#86989D",
      minHeight: "55px !important",
    },
    "& .MuiDataGrid-root .MuiDataGrid-columnSeparator": {
      visibility: "hidden",
    },
    "& .MuiSvgIcon-root": {
      color: "#D6E3E6",
    },
    "& .Mui-checked": {
      "& .MuiSvgIcon-root": {
        color: "#003444",
      },
    },
  },
});

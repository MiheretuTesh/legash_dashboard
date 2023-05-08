import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    width: "50%",
    "@media (max-width: 900px)": {
      width: "100%",
    },
  },
});

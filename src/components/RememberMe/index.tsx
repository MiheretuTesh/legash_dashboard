import { Checkbox } from "@mui/material";
import React from "react";
import { useStyles } from "./index.style";

interface RememberMeProps {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

const RememberMe = ({ state, setState }: RememberMeProps) => {
  const styles = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.checked);
  };

  return (
    <div className={styles.container}>
      <Checkbox
        className={styles.checkbox}
        checked={state}
        onChange={handleChange}
      />
      <span className={styles.rememberMeTxt}>Remember me</span>
    </div>
  );
};

export default RememberMe;

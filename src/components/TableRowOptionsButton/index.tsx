import React from "react";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { OptionsIcon } from "../../assets";
import { useStyles } from "./index.style";

interface TableRowOptionsButtonProps {
  onEditHandler: () => void;
  onDeleteHandler: () => void;
}

const TableRowOptionsButton = ({
  onEditHandler,
  onDeleteHandler,
}: TableRowOptionsButtonProps) => {
  const styles = useStyles();
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState: any) => (
        <React.Fragment>
          <IconButton className={styles.iconBtn} {...bindTrigger(popupState)}>
            <OptionsIcon />
          </IconButton>
          <Menu {...bindMenu(popupState)}>
            <MenuItem
              onClick={() => {
                popupState.close();
                onEditHandler();
              }}
            >
              Edit
            </MenuItem>
            <MenuItem
              onClick={() => {
                popupState.close();
                onDeleteHandler();
              }}
            >
              Delete
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
};

export default TableRowOptionsButton;

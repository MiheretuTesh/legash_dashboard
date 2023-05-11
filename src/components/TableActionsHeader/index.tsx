import React from "react";
import Button from "@mui/material/Button";
import { useStyles } from "./index.style";
import { DeleteIcon, EditIcon, SearchIcon } from "../../assets";
import { AssetTableRow, UserTableRow } from "../../types";
import { useNavigate } from "react-router-dom";

interface TableActionsHeaderProps {
  totalSelected: number;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  addText: string;
  totalRowsSelected: number;
  data: UserTableRow[] | AssetTableRow[];
  setTableRows:
    | React.Dispatch<React.SetStateAction<UserTableRow[]>>
    | React.Dispatch<React.SetStateAction<AssetTableRow[]>>
    | any;
  tableType: string;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setActionType: React.Dispatch<React.SetStateAction<string>>;
  exportTableToPdf: Function;
  isLoading?: boolean;
  handleOnSearchFieldChange: Function;
  parentRoute?: string;
}

const TableActionsHeader = ({
  totalSelected,
  searchValue,
  setSearchValue,
  addText,
  totalRowsSelected,
  data,
  setTableRows,
  tableType,
  setIsDeleteModalOpen,
  setIsModalOpen,
  setActionType,
  isLoading,
  exportTableToPdf,
  handleOnSearchFieldChange,
  parentRoute,
}: TableActionsHeaderProps) => {
  const styles = useStyles();
  const navigate = useNavigate();
  // const [, startTransition] = useTransition();

  // const onSearchTextChangeHandler = (
  //   e: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   setSearchValue(e.target.value);
  //   startTransition(() => {
  //     tableType === "users"
  //       ? setTableRows(
  //           (data as any).filter(
  //             (item: any) =>
  //               `${item.first_name.toLowerCase()} ${item.last_name.toLowerCase()}`.includes(
  //                 e.target.value.toLowerCase()
  //               ) ||
  //               item.email
  //                 .toLowerCase()
  //                 .includes(e.target.value.toLowerCase()) ||
  //               item.type
  //                 .toLowerCase()
  //                 .includes(e.target.value.toLowerCase()) ||
  //               item.user_assets.includes(e.target.value.toLowerCase())
  //           )
  //         )
  //       : setTableRows(
  //           (data as any).filter(
  //             (item: any) =>
  //               item.building
  //                 .toLowerCase()
  //                 .includes(e.target.value.toLowerCase()) ||
  //               item.location
  //                 .toLowerCase()
  //                 .includes(e.target.value.toLowerCase()) ||
  //               item.details
  //                 .toLowerCase()
  //                 .includes(e.target.value.toLowerCase())
  //           )
  //         );
  //   });
  // };

  const onAddButtonHandler = () => {
    if (addText === "user") {
      setActionType("add");
      setIsModalOpen(true);
    }
    if (addText === "Campaign") {
      navigate(`/${parentRoute}/new-campaign`);
    }
    if (addText === "Hospital") {
      navigate(`/${parentRoute}/new-hospitals`);
    }
  };

  const onEditClickHandler = () => {
    setActionType("edit");
    setIsModalOpen(true);
  };

  const onDeleteClickHandler = () => {
    setIsDeleteModalOpen(true);
  };

  const onExportClickHandler = () => {
    exportTableToPdf();
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.editDeleteContainer}>
        {/* <p className={styles.selectedTxt}>{totalSelected} Selected</p> */}
        {/* <Button
          variant="outlined"
          className={styles.actionBtn}
          startIcon={<EditIcon />}
          disabled={
            totalRowsSelected === 0 || totalRowsSelected > 1 || isLoading
          }
          onClick={onEditClickHandler}
        >
          Edit
        </Button>
        <Button
          variant="outlined"
          className={`${styles.actionBtn} ${styles.lessMargin}`}
          startIcon={<DeleteIcon />}
          disabled={totalRowsSelected === 0 || isLoading}
          onClick={onDeleteClickHandler}
        >
          Delete
        </Button>
        <Button
          variant="outlined"
          className={`${styles.actionBtn} ${styles.lessMargin}`}
          // startIcon={<DeleteIcon />}
          // disabled={totalRowsSelected === 0 || isLoading}
          onClick={onExportClickHandler}
        >
          Export
        </Button> */}
      </div>
      <div className={styles.searchAddContainer}>
        <div className={styles.searchContainer}>
          <img className={styles.searchIcon} src={SearchIcon} alt="search" />
          <input
            className={styles.input}
            value={searchValue}
            // onChange={onSearchTextChangeHandler}
            onChange={(e) => {
              // setSearchValue(e.target.value);
              handleOnSearchFieldChange(e);
            }}
            placeholder={"Search..."}
            disabled={isLoading}
            // onKeyPress={event => {
            //   console.log(event.target)
            //   if (event.key === 'Enter') {
            //     handleOnKeyPress();
            //   }
            // }}
          />
        </div>
        <Button
          variant="contained"
          className={styles.addBtn}
          onClick={onAddButtonHandler}
          // disabled={isLoading}
        >
          + Add {addText}
        </Button>
      </div>
    </div>
  );
};

export default TableActionsHeader;

import React from "react";
import FormButton from "../FormButton";
import Pagination from "@mui/material/Pagination";
import { useStyles } from "./index.style";
import { TABLE_LIMIT } from "../../constants";

interface TablePaginationProps {
  previousDisabled?: boolean;
  nextDisabled?: boolean;
  onPreviousHandler: () => void;
  onNextHandler: () => void;
  currentPage: number;
  setCurrentOffset: React.Dispatch<React.SetStateAction<number>>;
  total: number;
}

const TablePagination = ({
  previousDisabled,
  nextDisabled,
  onPreviousHandler,
  onNextHandler,
  currentPage,
  setCurrentOffset,
  total,
}: TablePaginationProps) => {
  const styles = useStyles();

  const countValue:number = Math.ceil(total / 5);

  const onChangeHandler = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentOffset((page - 1) * TABLE_LIMIT);
  };

  return (
    <div className={styles.paginationContainer}>
      <div className={styles.paginationBtnContainer}>
        <FormButton
          buttonType="button"
          buttonVariant="contained"
          disabled={previousDisabled}
          onButtonClick={onPreviousHandler}
        >
          Previous
        </FormButton>
      </div>
      <Pagination
        page={currentPage}
        onChange={onChangeHandler}

        count={!isNaN(countValue) ? countValue : 0}
        
        hidePrevButton
        hideNextButton
      />
      <div className={styles.paginationBtnContainer}>
        <FormButton
          buttonType="button"
          buttonVariant="contained"
          disabled={nextDisabled}
          onButtonClick={onNextHandler}
        >
          Next
        </FormButton>
      </div>
    </div>
  );
};

export default TablePagination;

import React from "react";
import { SearchIcon } from "../../assets";
import { useStyles } from "./index.style";

interface SearchBarProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
    handleOnSearchFieldChange: React.ChangeEventHandler<HTMLInputElement> | Function | undefined;
  disabled?: boolean;
}

const SearchBar = ({
  searchValue,
  handleOnSearchFieldChange,
  disabled,
}: SearchBarProps) => {
  const styles = useStyles();


    return (
    <div className={styles.searchContainer}>
      <img className={styles.searchIcon} src={SearchIcon} alt="search" />
      <input
        className={styles.input}
        value={searchValue}
        onChange={(e) =>
            // @ts-ignore
            handleOnSearchFieldChange(e)
        }
        placeholder={"Search..."}
        disabled={disabled}
      />
    </div>
  );
};

export default SearchBar;

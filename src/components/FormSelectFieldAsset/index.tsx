import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { ErrorMessage, FastField, Field } from "formik";
import React, { useState, useContext } from "react";
import { useStyles } from "./index.style";
import {AssumptionFormContext} from "../../contexts/AssumptionFormContext";

interface FormSelectFieldAssetProps {
  fieldName: string;
  fieldLabel?: string;
  options: any[];
  formikChangeHandler?: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(
      field: T
    ): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
  initialValue?: string | string[];
  placeholder?: string;
  customStyle?: string;
  customDropDownMenuContainerStyle?: string;
  fastField?: boolean;
  multiple?: boolean;
  isUserSelect?: boolean;
  isAssetSelect?: boolean;
  setSelectedBuildingId: Function;
  assumptionFormSetFieldValue: (
      field: string,
      value: any,
      shouldValidate?: boolean | undefined
  ) => void;
}

const FormSelectFieldAsset = ({
  fieldName,
  fieldLabel,
  options,
  initialValue,
  placeholder,
  formikChangeHandler,
  customStyle,
  customDropDownMenuContainerStyle,
  fastField,
  multiple,
  isUserSelect,
  isAssetSelect,
  setSelectedBuildingId,
  assumptionFormSetFieldValue
}: FormSelectFieldAssetProps) => {
  const [value, setValue] = useState(initialValue);
  const styles = useStyles();

  const { setAssetValue } =
      useContext(AssumptionFormContext);

  const ComponentField = fastField ? FastField : Field;

  const handleChange = (event: SelectChangeEvent) => {
    if (formikChangeHandler) {
      formikChangeHandler(event);
    }
    if (multiple) {
      const {
        target: { value },
      } = event;
      setValue(value);
      // setBuildingId(value)
    } else {
      setValue(event.target.value);
    }
  };

  return (
    <div className={`${styles.formFieldContainer} ${customStyle}`}>
      {fieldLabel && <label className={styles.label}>{fieldLabel}</label>}
      <ComponentField name={fieldName}>
        {({
          field, // { name, value, onChange, onBlur }
          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
          meta,
        }: any) => (
          <FormControl className={styles.field}>
            <Select
              {...field}
              className={styles.select}
              MenuProps={{
                classes: {
                  paper: `${styles.dropdownMenuContainer} ${customDropDownMenuContainerStyle}`,
                },
              }}
              value={value}
              onChange={handleChange}
              displayEmpty
              multiple={multiple}
            >
              {placeholder ? (
                isUserSelect  ? (
                  <MenuItem value={["none"]} disabled>
                    {placeholder}
                  </MenuItem>
                ) : (
                  <MenuItem value="none" disabled>
                    {placeholder}
                  </MenuItem>
                )
              ) : null}
              {isUserSelect && options &&
                options.map((option, index) => (
                  <MenuItem key={`${index}-${option}`} value={option}>
                    {`${option.first_name} ${option.last_name}`}
                  </MenuItem>
                ))}
              {isAssetSelect && options &&
                options.map((option, index) => (
                  <MenuItem
                    key={`${index}-${option.building}`}
                    value={option.building}
                    onClick={()=> {
                      setSelectedBuildingId(option.id);
                      setAssetValue(option.id);
                      assumptionFormSetFieldValue("buildingName", option.building);
                    }}
                  >
                    {option.building}
                  </MenuItem>
                ))}
              {!isUserSelect &&
                !isAssetSelect && options &&
                options.map((option, index) => (
                  <MenuItem key={`${index}-${option}`} value={option}>
                    {option}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        )}
      </ComponentField>

      <ErrorMessage
        className={`${styles.errorMessageTxt} ${
          !fieldLabel ? styles.errorMessageTxtNoLabel : ""
        }`}
        component="p"
        name={fieldName}
      />
    </div>
  );
};

export default FormSelectFieldAsset;

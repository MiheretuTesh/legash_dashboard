import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import { ErrorMessage, Field, FastField } from "formik";
import React, { useEffect, useState } from "react";
import { useStyles } from "./index.style";

interface FormSelectFieldProps {
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
  customSelectStyle?: string;
  addingUser?: boolean;
  isForm?: boolean;
  isCampaignCreate?: boolean;
  isHospitalCreate?: boolean;
  isHospital?: boolean;
  isFormName?: string;
}

const FormSelectField = ({
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
  customSelectStyle,
  addingUser,
  isForm,
  isFormName,
}: FormSelectFieldProps) => {
  const [value, setValue] = useState(initialValue);
  const styles = useStyles();

  const ComponentField = fastField ? FastField : Field;
  const ComponentFieldForm = fastField ? Field : Field;

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);
  const handleChange = (event: SelectChangeEvent) => {
    if (formikChangeHandler) {
      formikChangeHandler(event);
    }
    if (multiple) {
      const {
        target: { value },
      } = event;
      setValue(value);
    } else {
      setValue(event.target.value);
    }
  };

  return (
    <div className={`${styles.formFieldContainer} ${customStyle}`}>
      {fieldLabel && <label className={styles.label}>{fieldLabel}</label>}
      {isForm ? (
        <ComponentFieldForm name={fieldName}>
          {({
            field, // { name, value, onChange, onBlur }
            form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
            meta,
          }: any) => (
            <FormControl className={styles.field}>
              <Select
                {...field}
                className={`${styles.select} ${customSelectStyle}`}
                MenuProps={{
                  classes: {
                    paper: `${styles.dropdownMenuContainer} ${customDropDownMenuContainerStyle}`,
                  },
                }}
                value={value}
                onChange={handleChange}
                displayEmpty
                multiple={multiple}
                renderValue={(selected: any) =>
                  multiple && isUserSelect
                    ? selected
                        .map(
                          (option: any) =>
                            `${option.first_name} ${option.last_name}`
                        )
                        .join(", ")
                    : multiple && isAssetSelect
                    ? selected.map((option: any) => option.building).join(", ")
                    : selected === "none"
                    ? placeholder
                    : selected
                }
              >
                {placeholder ? (
                  isUserSelect ? (
                    <MenuItem value={["none"]} disabled>
                      {placeholder}
                    </MenuItem>
                  ) : (
                    <MenuItem value="none" disabled>
                      {placeholder}
                    </MenuItem>
                  )
                ) : null}
                {isUserSelect &&
                  options &&
                  options.map((option, index) => (
                    <MenuItem key={`${index}-${option}`} value={option}>
                      {option.first_name !== null &&
                        option.last_name !== null && (
                          <>
                            <Checkbox
                              checked={
                                (value && value.indexOf(option) > -1) || false
                              }
                            />
                            <ListItemText
                              primary={`${option.first_name} ${option.last_name}`}
                            />
                          </>
                        )}
                    </MenuItem>
                  ))}
                {addingUser &&
                  isAssetSelect &&
                  options &&
                  options.map((option, index) => (
                    <MenuItem
                      key={`${index}-${option.building}`}
                      value={option}
                    >
                      <Checkbox
                        checked={(value && value.indexOf(option) > -1) || false}
                      />
                      <ListItemText primary={option.building} />
                    </MenuItem>
                  ))}
                {!addingUser &&
                  isAssetSelect &&
                  options &&
                  options.map((option, index) => (
                    <MenuItem
                      key={`${index}-${option.building}`}
                      value={option.building}
                    >
                      {option.building}
                    </MenuItem>
                  ))}

                {!isUserSelect &&
                  !isAssetSelect &&
                  options &&
                  options.map((option, index) => (
                    <MenuItem key={`${index}-${option}`} value={option}>
                      {option}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          )}
        </ComponentFieldForm>
      ) : (
        <ComponentField name={fieldName}>
          {({
            field, // { name, value, onChange, onBlur }
            form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
            meta,
          }: any) => (
            <FormControl className={styles.field}>
              <Select
                {...field}
                className={`${styles.select} ${customSelectStyle}`}
                MenuProps={{
                  classes: {
                    paper: `${styles.dropdownMenuContainer} ${customDropDownMenuContainerStyle}`,
                  },
                }}
                value={value}
                onChange={handleChange}
                displayEmpty
                multiple={multiple}
                renderValue={(selected: any) =>
                  multiple && isUserSelect
                    ? selected
                        .map(
                          (option: any) => `${option.email} ${option.last_name}`
                        )
                        .join(", ")
                    : multiple && isAssetSelect
                    ? selected.map((option: any) => option.building).join(", ")
                    : selected === "none"
                    ? placeholder
                    : selected
                }
              >
                {placeholder ? (
                  isUserSelect ? (
                    <MenuItem value={["none"]} disabled>
                      {placeholder}
                    </MenuItem>
                  ) : (
                    <MenuItem value="none" disabled>
                      {placeholder}
                    </MenuItem>
                  )
                ) : null}
                {isUserSelect &&
                  options &&
                  options.map((option, index) => (
                    <MenuItem key={`${index}-${option}`} value={option}>
                      {option.first_name !== null &&
                      option.last_name !== null ? (
                        <>
                          <Checkbox
                            checked={
                              (value && value.indexOf(option) > -1) || false
                            }
                          />
                          <ListItemText
                            primary={`${option.first_name} ${option.last_name}`}
                          />
                        </>
                      ) : (
                        <>
                          <Checkbox
                            checked={
                              (value && value.indexOf(option) > -1) || false
                            }
                          />
                          <ListItemText primary={`${option.email}`} />
                        </>
                      )}
                    </MenuItem>
                  ))}
                {addingUser &&
                  isAssetSelect &&
                  options &&
                  options.map((option, index) => (
                    <MenuItem
                      key={`${index}-${option.building}`}
                      value={option}
                    >
                      <Checkbox
                        checked={(value && value.indexOf(option) > -1) || false}
                      />
                      <ListItemText primary={option.building} />
                    </MenuItem>
                  ))}
                {/* {isCampaignCreate &&
                  options &&
                  options.map((option, index) => (
                    <MenuItem key={`${index}-${option.id}`} value={option.name}>
                      {option.name}
                    </MenuItem>
                  ))} */}

                {/* {isHospitalCreate &&
                  options &&
                  options.map((option, index) => (
                    <MenuItem key={`${index}-${option.id}`} value={option.name}>
                      {option.name}
                    </MenuItem>
                  ))} */}

                {isFormName === "hospital_create" &&
                  options &&
                  options.map((option, index) => (
                    <MenuItem key={`${index}-${option}`} value={option}>
                      {option}
                    </MenuItem>
                  ))}

                {/* {isAssetSelect &&
                  options &&
                  options.map((option, index) => (
                    <MenuItem key={`${index}-${option}`} value={option}>
                      {option}
                    </MenuItem>
                  ))} */}
              </Select>
            </FormControl>
          )}
        </ComponentField>
      )}

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

export default FormSelectField;

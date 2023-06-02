import React, { useState } from "react";
import { Field, ErrorMessage, FastField } from "formik";
import { IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useStyles } from "./index.style";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import en from "date-fns/locale/en-US"; // optional, use if you want to localize the date picker
registerLocale("en-US", en);

interface FormFieldProps {
  fieldName: string;
  fieldLabel?: string;
  fieldPlaceholder?: string;
  customStyle?: string;
  isDisabled?: boolean;
  type?: string;
  fastField?: boolean;
  unit?: string;
  customFieldStyle?: string;
  customErrorFieldStyle?: string;
  oneDigit?: boolean;
  handleChange?: (e: React.ChangeEvent<any>) => void;
  formikChangeHandler?: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(
      field: T
    ): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
  onBlurHandler?: () => void;
}
interface FormValues {
  date: Date;
}

const initialValues: FormValues = {
  date: new Date(),
};

const FormField = ({
  fieldName,
  fieldLabel,
  fieldPlaceholder,
  customStyle,
  isDisabled,
  type,
  fastField,
  unit,
  customFieldStyle,
  customErrorFieldStyle,
  oneDigit,
  handleChange,
  formikChangeHandler,
  onBlurHandler,
}: FormFieldProps) => {
  const styles = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const ComponentField = fastField ? FastField : Field;

  const onShowPasswordClickHandler = () => {
    setShowPassword((prevState) => !prevState);
  };

  const [dateValue, setDateValue] = useState<Date>(new Date());

  const handleDateChange = (date: Date) => {
    setDateValue(date);
    if (formikChangeHandler) {
      formikChangeHandler({
        target: {
          name: fieldName,
          value: date,
        },
      });
    }
  };

  return (
    <div className={`${styles.formFieldContainer} ${customStyle}`}>
      {fieldLabel && (
        <label className={styles.label} htmlFor={fieldName}>
          {fieldLabel}
        </label>
      )}
      <div className={styles.fieldContainer}>
        {fieldName === "dateOfBirth" ||
        fieldName === "startDate" ||
        fieldName === "endDate" ? (
          <Field name={fieldName} placeholder={fieldPlaceholder}>
            {({ field }: any) => (
              <DatePicker
                className={`${styles.field} ${customFieldStyle}`}
                {...field}
                selected={dateValue}
                onChange={handleDateChange}
                placeholderText={fieldPlaceholder}
                dateFormat="yyyy-MM-dd"
                locale="en-US"
                onKeyDown={(e) => e.preventDefault()}
              />
            )}
          </Field>
        ) : oneDigit && handleChange && formikChangeHandler ? (
          <ComponentField
            className={`${styles.field} ${customFieldStyle}`}
            name={fieldName}
            placeholder={fieldPlaceholder}
            disabled={isDisabled}
            maxLength="1"
            onChange={(e: React.ChangeEvent<any>) => {
              formikChangeHandler(e);
              handleChange(e);
            }}
            size="1"
            min="0"
            max="9"
            pattern="[0-9]{1}"
          />
        ) : (
          <ComponentField
            className={`${styles.field} ${customFieldStyle}`}
            name={fieldName}
            placeholder={fieldPlaceholder}
            disabled={isDisabled}
            type={
              type === "password" ? (showPassword ? "text" : "password") : type
            }
            onBlur={onBlurHandler}
            rows={fieldName === "diagnosis" && 5}
            component={fieldName === "diagnosis" && "textarea"}
          />
        )}
        {type === "password" && (
          <div className={styles.showPasswordBtnContainer}>
            <IconButton
              className={styles.showPasswordBtn}
              onClick={onShowPasswordClickHandler}
            >
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>
          </div>
        )}
        {unit && <p className={styles.unit}>{unit}</p>}
      </div>
      <ErrorMessage
        className={`${styles.errorMessageTxt} ${
          oneDigit
            ? customErrorFieldStyle
            : !fieldLabel
            ? styles.errorMessageTxtNoLabel
            : ""
        }`}
        component="p"
        name={fieldName}
      />
    </div>
  );
};

export default FormField;

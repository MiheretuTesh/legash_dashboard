import React, { useRef } from "react";
import Button from "@mui/material/Button";
import { useStyles } from "./index.style";
import { Field } from "formik";
import { UploadIcon } from "../../assets";
import rightIcon from "../../assets/images/rightIcon.png";

interface ImageUploadButtonProps {
  customStyle?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  onChange: (e: any, setFieldValue: any) => void;
  disabled?: boolean;
  fieldName?: string;
  formValue?: string;
  isUploaded?: string;
}

const PersonalDetailImageUpload = ({
  customStyle,
  icon,
  children,
  onChange,
  disabled,
  fieldName,
  isUploaded,
}: ImageUploadButtonProps) => {
  const hiddenFileInput: any = useRef(null);
  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const styles = useStyles();

  return (
    <>
      <Field name={fieldName}>
        {({ form, field }: any) => {
          const { setFieldValue } = form;
          return (
            <>
              <Button
                variant="outlined"
                className={`${styles.btnContainer} ${customStyle}`}
                startIcon={
                  isUploaded ? (
                    <img
                      style={{ width: 20, height: 20 }}
                      src={rightIcon}
                      alt="Personal Detail"
                    />
                  ) : (
                    <UploadIcon />
                  )
                }
                onClick={() => {
                  handleClick();
                }}
                disabled={disabled}
              >
                {children}
              </Button>
              <input
                ref={hiddenFileInput}
                type="file"
                className="form-control"
                style={{ display: "none" }}
                // required
                onChange={(e) => onChange(e, setFieldValue)}
              />
            </>
          );
        }}
      </Field>
    </>
  );
};

export default PersonalDetailImageUpload;

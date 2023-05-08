import React, {useRef} from "react";
import Button from "@mui/material/Button";
import { useStyles } from "./index.style";
import {Field} from "formik";

interface IconUnderlinedButtonProps {
  customStyle?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  fieldName?: string;
  fastField?: boolean;
  oneDigit?: boolean;
  formikChangeHandler?: {
      (e: React.ChangeEvent<any>): void;
      <T = string | React.ChangeEvent<any>>(
          field: T
      ): T extends React.ChangeEvent<any>
          ? void
          : (e: string | React.ChangeEvent<any>) => void;
  };
}

const IconUnderlinedButton = ({
  customStyle,
  icon,
  children,
  onClick,
  disabled,
  fieldName,
  formikChangeHandler,
  fastField
}: IconUnderlinedButtonProps) => {
  const hiddenFileInput : any = useRef(null);

    const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const convertToBase64 = (file:any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleChangeImg = async (e:any, setFieldValue: any) => {
    const file = e.target.files[0];
    if (file?.size/1024/1024 < 5) {
      const base64 = await convertToBase64(file);
      setFieldValue(fieldName, base64);
    }
    else {
      console.log('Image size must be of 2MB or less');
    };
  };


  const styles = useStyles();
  return (
    <>
      {formikChangeHandler ? (
              <Field name={fieldName}>
                {({ form, field }:any) => {
                  const { setFieldValue } = form
                  return (
                      <>
                        <Button
                            variant="outlined"
                            className={`${styles.btnContainer} ${customStyle}`}
                            startIcon={icon}
                            onClick={()=> {handleClick()}}
                            disabled={disabled}
                        >
                          {children}
                        </Button>
                        <input
                            ref={hiddenFileInput}
                            type="file"
                            className='form-control'
                            style={{display: 'none'}}
                            // required
                            onChange={(e) => handleChangeImg(e, setFieldValue)}
                        />
                      </>
                  )
                }}
              </Field>
          ):
          <>
            <Button
                variant="outlined"
                className={`${styles.btnContainer} ${customStyle}`}
                startIcon={icon}
                onClick={()=> {onClick()}}
                disabled={disabled}
            >
              {children}
            </Button>
          </>
      }
    </>
  );
};

export default IconUnderlinedButton;

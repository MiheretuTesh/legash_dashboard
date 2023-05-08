import React, {useRef} from "react";
import Button from "@mui/material/Button";
import { useStyles } from "./index.style";
import {Field} from "formik";
import { UploadIcon } from "../../assets";
import rightIcon from "../../assets/images/rightIcon.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ImageUploadButtonProps {
  customStyle?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  fieldName?: string;
  formValue?: string;
}

const ImageUploadButton = ({
  customStyle,
  icon,
  children,
  onClick,
  disabled,
  fieldName,
  formValue
}: ImageUploadButtonProps) => {
  const hiddenFileInput : any = useRef(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const notify = () => {
    toast("Image size must be of 5MB or less");
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
    const files = e.target.files;

    const base64Img = [];

    for(let i = 0; i < files.length; i++){
      if (files[i].size < 5000000) {
        const base64 = await convertToBase64(files[i]);
        base64Img.push(base64);
      }
      if (file?.size > 5000000) {
        notify();
        break;
      }
    }

    if(base64Img.length === files.length){
      setFieldValue(fieldName, base64Img);
    }

    // if (file?.size < 5000000) {
    //   const base64 = await convertToBase64(file);
    //   setFieldValue(fieldName, base64);
    // }
    // if (file?.size > 5000000) {
    //   notify();
    // }
  };

  const styles = useStyles();

  return (
    <>
      <Field name={fieldName}>
        {({ form, field }:any) => {
          const { setFieldValue } = form;
          return (
              <>
                <Button
                    variant="outlined"
                    className={`${styles.btnContainer} ${customStyle}`}
                    startIcon=
                        {formValue ?
                            <img style={{width: 20, height: 20}} src={rightIcon} alt="on-site upload"/>
                        :
                            <UploadIcon />
                        }
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
                    multiple
                    onChange={(e) => {
                      handleChangeImg(e, setFieldValue);
                    }}
                />
                {/*{formValue && "Hello"}*/}
              </>
          )
        }}
      </Field>
      <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"/>
    </>
  );
};

export default ImageUploadButton;

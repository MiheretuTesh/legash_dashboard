import React, { useState } from "react";
import { useStyles } from "./index.style";
import { useNavigate } from "react-router-dom";
import { FormControl,  MenuItem, Select, SelectChangeEvent} from "@mui/material";
import FormButton from "../../components/FormButton";

const AdminNewForm = () => {
  const styles = useStyles();
    const navigate = useNavigate();

  const [formType, setFormType] = useState('');
  const [isErr, setIsErr] = useState(false);

    const handleChange = (e:SelectChangeEvent)=>{
      setFormType(e.target.value as string)
    };
    const onSubmit = ()=>{
        if(formType==="assumption"){
            navigate("/account-admin/new-onsite-checklist")
        }else if(formType === "consultant") {
            navigate("/account-admin/consultant-form")
        }else {
            setIsErr(true)
        }
    };

  return (
    <>
        <br/><br/><br/>
        <FormControl className={styles.field}>
            <Select
                className={styles.select}
                value={formType}
                placeholder={"form type"}
                onChange={handleChange}
                label={"come"}
                displayEmpty
            >
                <MenuItem value={""} disabled>
                    Select form type
                </MenuItem>
                <MenuItem value={"assumption"}>New Assumption Form</MenuItem>
                <MenuItem value={"consultant"}>New Onsite Checklist form</MenuItem>
            </Select>
            {isErr && <span className={styles.errorMessageTxt}>*Required</span>}
        </FormControl>
        <br/><br/>
        <div className={styles.nextButton}>
            <FormButton
                buttonVariant="contained"
                buttonType="submit"
                onButtonClick={onSubmit}
                customStyle={styles.nextPageBtn}
            >
            Next
        </FormButton>
        </div>
    </>
  );
};

export default AdminNewForm;

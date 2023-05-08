import React from "react";
import { useStyles } from "./index.style";
import AxiosInstance from "../../api/AxiosInstance";
import { useNavigate } from "react-router";
import { Form, Formik } from "formik";
import FormButton from "../../components/FormButton";
import FormSelectField from "../../components/FormSelectField";
import {
  LegashIconTextDark,
  AmbioWallpaperLeft,
  AmbioWallpaperRight,
} from "../../assets";

interface LoginFormValues {
  role: string;
}

export const ROLES_NAMES = [
  "Fund Asset Manager Admin",
  "Fund Asset Manager",
  "Engineer",
];
const SelectRolePage = () => {
  const styles = useStyles();
  const navigate = useNavigate();

  const onSubmitHandler = async (values: LoginFormValues) => {
    let key_value = "";
    switch (values.role) {
      case "Fund Asset Manager Admin":
        key_value = "FUND_ASSET_MANAGER_ADMIN";
        break;
      case "Fund Asset Manager":
        key_value = "FUND_ASSET_MANAGER";
        break;
      case "Engineer":
        key_value = "ENGINEER";
        break;
    }
    const { data } = await AxiosInstance.patch("users/profile/", {
      type: key_value,
    });
    localStorage.setItem("type", data.type);
    if (data.type === key_value) {
      navigate("/");
    }
    return data;
  };
  const initialValues = {
    role: "",
  };

  return (
    <div className={styles.pageContainer}>
      <img
        className={styles.leftWallpaper}
        src={AmbioWallpaperLeft}
        alt="left-logo"
      />
      <img
        className={styles.rightWallpaper}
        src={AmbioWallpaperRight}
        alt="right-logo"
      />
      <img
        className={styles.ambioLogoText}
        src={LegashIconTextDark}
        alt="ambio"
      />
      <div className={styles.outletContainer}>
        <div className={styles.pageSmallContainer}>
          <Formik initialValues={initialValues} onSubmit={onSubmitHandler}>
            {({ handleChange }) => (
              <>
                <Form className={styles.formContainer}>
                  <h1 className={styles.formHeader}>Select Role</h1>
                  <FormSelectField
                    fieldName="role"
                    formikChangeHandler={handleChange}
                    options={ROLES_NAMES}
                    initialValue={"none"}
                    placeholder={"Select a role"}
                  />

                  <FormButton buttonVariant="contained" buttonType="submit">
                    Submit
                  </FormButton>
                </Form>
              </>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SelectRolePage;

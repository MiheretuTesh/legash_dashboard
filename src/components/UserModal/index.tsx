import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useStyles } from "./index.style";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormField from "../FormField";
import FormSelectField from "../FormSelectField";
import FormButton from "../FormButton";
import { Roles, ROLES_NAMES } from "../../constants";
import { useAddUser } from "../../hooks/useAddUser";
import LoadingSpinner from "../LoadingSpinner";
import { useEditUsers } from "../../hooks/useEditUsers";
import { GridSelectionModel } from "@mui/x-data-grid";
import ErrorModal from "../ErrorModal";

interface UserFormValues {
  firstName: string;
  lastName: string;
  // username: string;
  email: string;
  role: string;
}

interface UserModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  type: string;
  oldValues: any;
  availableAssets: any;
  setSelectedRows: React.Dispatch<
    React.SetStateAction<GridSelectionModel | undefined>
  >;
  setSelectionModel: React.Dispatch<React.SetStateAction<GridSelectionModel>>;
  setTotalSelected: React.Dispatch<React.SetStateAction<number>>;
}

const UserFormSchema = Yup.object().shape({
  firstName: Yup.string().required("*Required"),
  lastName: Yup.string().required("*Required"),
  email: Yup.string().email("Invalid email").required("*Required"),
  role: Yup.string().required("*Required"),
});

const UserModal = ({
  isModalOpen,
  setIsModalOpen,
  type,
  oldValues,
  availableAssets,
  setSelectedRows,
  setSelectionModel,
  setTotalSelected,
}: UserModalProps) => {
  const styles = useStyles();

  const [isError, setIsError] = useState(false);
  const [errorText, setErrorText] = useState("");

  const onAddUserSuccessHandler = () => {
    setTotalSelected(0);
    setSelectionModel([]);
    setSelectedRows([]);
    onCloseHandler();
  };

  const onAddEditUserErrorHandler = (error: any) => {
    setErrorText("User with this email already exists");
    setIsError(true);
  };

  const onEditUserSuccessHandler = () => {
    setTotalSelected(0);
    setSelectionModel([]);
    setSelectedRows([]);
    onCloseHandler();
  };

  const { mutate: addMutate, isLoading: isLoadingAddUser } = useAddUser({
    onAddUserSuccess: onAddUserSuccessHandler,
    onAddUserError: (error: any) => onAddEditUserErrorHandler(error),
  });

  const { mutate: editMutate, isLoading: isLoadingEditUser } = useEditUsers({
    onEditUserSuccess: onEditUserSuccessHandler,
    onEditUserError: (error: any) => onAddEditUserErrorHandler(error),
  });

  const oldSelectedAssets: () => string[] = () => {
    return [];
    // let assets: any[] = [];
    // availableAssets.results.forEach((asset: any) => {
    //   if (oldValues.user_assets.includes(asset.building)) {
    //     assets.push(asset);
    //   }
    // });
    // return assets;
  };

  const initialValues: any =
    oldValues.id !== 0 && type === "edit"
      ? {
          firstName: oldValues.firstName,
          lastName: oldValues.lastName,
          email: oldValues.email,
          role:
            oldValues.role === Roles.Admin
              ? "Super Admin"
              : oldValues.type === Roles.HospitalAdmin
              ? "Hospital Admin"
              : "User",
        }
      : {
          firstName: "",
          lastName: "",
          email: "",
          role: "",
        };

  const onCloseHandler = () => {
    setIsModalOpen(false);
  };

  const onSubmitHandler = (values: UserFormValues) => {
    console.log(values, "values values");
    const selectedRole =
      values.role === "Admin"
        ? Roles.Admin
        : values.role === "Hospital Admin"
        ? Roles.HospitalAdmin
        : values.role === "Report Admin"
        ? Roles.ReportAdmin
        : Roles.User;

    if (type === "add") {
      addMutate({
        obj: {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          role: selectedRole,
        },
      });
    } else {
      editMutate({
        id: oldValues.id,
        obj: {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          // role: selectedRole,
          role: "645e44069e60637d858a265f",
        },
      });
    }
  };

  return (
    <Modal open={isModalOpen} onClose={onCloseHandler}>
      <>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmitHandler}
          validationSchema={UserFormSchema}
          validateOnBlur={false}
        >
          {({ handleChange }) => (
            <>
              <ErrorModal
                open={isError}
                setIsOpen={setIsError}
                errorText={errorText}
              />
              <Form className={styles.modalContainer}>
                <h1 className={styles.formHeader}>
                  {type === "add" ? "Add user" : "Edit user"}
                </h1>
                <div className={styles.cancelBtn}>
                  <IconButton onClick={onCloseHandler}>
                    <CloseIcon />
                  </IconButton>
                </div>
                <FormField
                  fieldName="firstName"
                  fieldLabel="First name"
                  fieldPlaceholder="John"
                />
                <FormField
                  fieldName="lastName"
                  fieldLabel="Last name"
                  fieldPlaceholder="Muller"
                />
                <FormField
                  fieldName="email"
                  fieldLabel="Email"
                  fieldPlaceholder="johnmiller@gmail.com"
                />
                <FormSelectField
                  fieldName="role"
                  fieldLabel="Role"
                  formikChangeHandler={handleChange}
                  options={ROLES_NAMES}
                  initialValue={
                    initialValues.role === "" ? "none" : initialValues.role
                  }
                  placeholder={"Select a role"}
                  isFormName="user"
                />
                {/* <FormSelectField
                  fieldName="assets"
                  fieldLabel="Buildings"
                  fastField
                  formikChangeHandler={handleChange}
                  options={[]}
                  initialValue={
                    initialValues.assets.length === 0
                      ? []
                      : initialValues.assets
                  }
                  multiple
                  isAssetSelect
                  placeholder={"Assign building"}
                  customDropDownMenuContainerStyle={styles.dropdownMenu}
                  addingUser={true}
                /> */}
                <FormButton buttonVariant="contained" buttonType="submit">
                  {isLoadingAddUser || isLoadingEditUser ? (
                    <LoadingSpinner type="button" />
                  ) : type === "add" ? (
                    "Add"
                  ) : (
                    "Save"
                  )}
                </FormButton>
              </Form>
            </>
          )}
        </Formik>
      </>
    </Modal>
  );
};

export default UserModal;

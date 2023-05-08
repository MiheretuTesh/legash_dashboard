import React from "react";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useStyles } from "./index.style";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormField from "../FormField";
import FormButton from "../FormButton";
import FormSelectField from "../FormSelectField";
import { GridSelectionModel } from "@mui/x-data-grid";
import { useAddAsset } from "../../hooks/useAddAsset";
import { useEditAsset } from "../../hooks/useEditAsset";
import LoadingSpinner from "../LoadingSpinner";

interface BuildingFormValues {
  company: string;
  location: string;
  details: string;
  users: any[];
}

interface BuildingModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  type: string;
  oldValues: any;
  availableUsers: any;
  setSelectedRows: React.Dispatch<
    React.SetStateAction<GridSelectionModel | undefined>
  >;
  setSelectionModel: React.Dispatch<React.SetStateAction<GridSelectionModel>>;
  setTotalSelected: React.Dispatch<React.SetStateAction<number>>;
  userId?: number,
}

const BuildingFormSchema = Yup.object().shape({
  company: Yup.string().required("*Required"),
  location: Yup.string().required("*Required"),
  details: Yup.string().required("*Required"),
  users: Yup.array(),
});

const BuildingModal = ({
  isModalOpen,
  setIsModalOpen,
  type,
  oldValues,
  availableUsers,
  setSelectedRows,
  setSelectionModel,
  setTotalSelected,
  userId
}: BuildingModalProps) => {
  const styles = useStyles();


  const onAddAssetSuccessHandler = () => {
    setTotalSelected(0);
    setSelectionModel([]);
    setSelectedRows([]);
    onCloseHandler();
  };

  const onEditAssetSuccessHandler = () => {
    setTotalSelected(0);
    setSelectionModel([]);
    setSelectedRows([]);
    onCloseHandler();
  };

  const { mutate: addMutate, isLoading: isLoadingAddAsset } = useAddAsset({
    onAddAssetSuccess: onAddAssetSuccessHandler,
  });

  const { mutate: editMutate, isLoading: isLoadingEditAsset } = useEditAsset({
    onEditAssetSuccess: onEditAssetSuccessHandler,
  });

  const oldSelectedUsers: () => string[] = () => {
    let users: any[] = [];
    availableUsers.results.forEach((user: any) => {
      if (oldValues?.users?.includes(user.id)) {
        users.push(user);
      }
    });

    return users;
  };

  const initialValues =
    oldValues.id !== 0 && type === "edit"
      ? {
          company: oldValues.building,
          location: oldValues.location,
          details: oldValues.details,
          users: oldSelectedUsers(),
        }
      : {
          company: "",
          location: "",
          details: "",
          users: [],
        };

  const onCloseHandler = () => {
    setIsModalOpen(false);
  };

  const onSubmitHandler = (values: BuildingFormValues) => {
    let assignedUsers = values.users.map((user) => user.id);
    if (type === "add") {
      addMutate({
        obj: {
          building: values.company,
          location: values.location,
          details: values.details,
          users: assignedUsers,
        },
      });
    } else {
      editMutate({
        id: oldValues.id,
        obj: {
          building: values.company,
          location: values.location,
          details: values.details,
          users: assignedUsers,
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
            validationSchema={BuildingFormSchema}
            validateOnBlur={false}
        >
          {({ handleChange }) => (
              <>
                <Form className={styles.modalContainer}>
                  <h1 className={styles.formHeader}>
                    {type === "add" ? "Add building" : "Edit building"}
                  </h1>
                  <div className={styles.cancelBtn}>
                    <IconButton onClick={onCloseHandler}>
                      <CloseIcon />
                    </IconButton>
                  </div>
                  <FormField
                      fieldName="company"
                      fieldLabel="Company"
                      fieldPlaceholder="Building A-B-C"
                  />
                  <FormField
                      fieldName="location"
                      fieldLabel="Location"
                      fieldPlaceholder="Germany"
                  />
                  <FormField
                      fieldName="details"
                      fieldLabel="Details"
                      fieldPlaceholder="Lörem ipsum förpappring,"
                  />
                  <FormSelectField
                      fieldName="users"
                      fieldLabel="Users"
                      formikChangeHandler={handleChange}
                      options={availableUsers.results}
                      initialValue={
                        initialValues.users.length === 0 ? [] : initialValues.users
                      }
                      placeholder={"Assign user"}
                      isUserSelect
                      fastField
                      multiple
                      customDropDownMenuContainerStyle={styles.dropdownMenu}
                  />
                  <FormButton buttonVariant="contained" buttonType="submit">
                    {isLoadingAddAsset || isLoadingEditAsset ? (
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

export default BuildingModal;

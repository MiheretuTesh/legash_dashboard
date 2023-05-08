import React, {useEffect} from "react";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useStyles } from "./index.style";
import FormButton from "../FormButton";
import { useDeleteUsers } from "../../hooks/useDeleteUsers";
import LoadingSpinner from "../LoadingSpinner";
import { GridSelectionModel } from "@mui/x-data-grid";
import { useDeleteAssets } from "../../hooks/useDeleteAssets";
import { useDeleteForm } from "../../hooks/useDeleteForm";
import { useDeleteAssetForm } from "../../hooks/useDeleteAssetForm";

interface DeleteModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  type: "user" | "asset" | "asset-form";
  selected?: any[] | undefined;
  setSelectedRows?: React.Dispatch<
    React.SetStateAction<GridSelectionModel | undefined>
  >;
  setTotalSelected?: React.Dispatch<React.SetStateAction<number>>;
  userId?: number;
  isAbleToDelete?: boolean,
  selectedForm?: number | any;
  formId?: number;
  formType?: "draft" | "submitted";
}

const DeleteModal = ({
  isModalOpen,
  setIsModalOpen,
  selected,
  type,
  setSelectedRows,
  setTotalSelected,
  userId,
  isAbleToDelete,
  selectedForm,
  formId,
  formType,
}: DeleteModalProps) => {

  const styles = useStyles();

  const onDeleteSuccessHandler = () => {
    setSelectedRows && setSelectedRows([]);
    setTotalSelected && setTotalSelected(0);
    console.log("DELETED");
    onCloseHandler();
  };

  const { mutate: deleteUsersMutate, isLoading: isDeleteUsersLoading } =
    useDeleteUsers({
      onDeleteUsersSuccess: onDeleteSuccessHandler,
    });

  const { mutate: deleteAssetsMutate, isLoading: isDeleteAssetsLoading } =
    useDeleteAssets({
      onDeleteAssetsSuccess: onDeleteSuccessHandler,
    });

  const {isSuccess} =
      useDeleteForm({
        onDeleteAssetSuccess: onDeleteSuccessHandler,
      });
      
  const { mutate: deleteAssetFormMutate, isLoading: isDeleteAssetFormLoading } =
    useDeleteAssetForm({
      onDeleteAssetFormSuccess: onDeleteSuccessHandler,
      formType,
    });

  const onCloseHandler = () => {
    setIsModalOpen(false);
  };

  // const { data: profileData, isLoading } = useGetUsersProfile();

  useEffect(()=>{
    if(isSuccess === true){
      window.location.reload();
    }
  },[isSuccess]);

  const onDeleteHandler = () => {

    switch (type) {
      case "user":
        deleteUsersMutate({ ids: selected || [] });
        break;
      case "asset":
        deleteAssetsMutate({ ids: selected || [] });
        break;
      case "asset-form":
        formId && deleteAssetFormMutate({ formId });
        break;
      default:
        break;
    }
  };

  const shownDeletedText = () => {
    let text = "";
    if (type === "asset") {
      if (selected && selected.length > 1) {
        text = "these assets";
      } else {
        text = "this asset";
      }
    } else if (type === "user") {
      if (selected && selected.length > 1) {
        text = "these users";
      } else {
        text = "this user";
      }
    } else {
      text = "this form";
    }
    return text;
  };

  return (
    <Modal open={isModalOpen} onClose={onCloseHandler}>
      {type === "asset" ? (
        isAbleToDelete ? (
          <div className={styles.modalContainer}>
            <div className={styles.cancelBtn}>
              <IconButton onClick={onCloseHandler}>
                <CloseIcon />
              </IconButton>
            </div>
            <p className={styles.question}>
              Are you sure you want to delete {shownDeletedText()}?
            </p>
            {isDeleteUsersLoading ||
            isDeleteAssetsLoading ||
            isDeleteAssetFormLoading ? (
              <div className={styles.loadingSpinnerContainer}>
                <LoadingSpinner />
              </div>
            ) : (
              <div className={styles.actionBtnsContainer}>
                <FormButton
                  customStyle={styles.actionBtn}
                  buttonVariant="contained"
                  buttonType="button"
                  onButtonClick={onDeleteHandler}
                >
                  Yes
                </FormButton>
                <FormButton
                  customStyle={styles.actionBtn}
                  buttonVariant="contained"
                  buttonType="button"
                  onButtonClick={onCloseHandler}
                >
                  No
                </FormButton>
              </div>
            )}
          </div>
        ) : (
          <div className={styles.modalContainer}>
            <div className={styles.cancelBtn}>
              <IconButton onClick={onCloseHandler}>
                <CloseIcon />
              </IconButton>
            </div>
            <p className={styles.question}>
              You do not have access to delete {shownDeletedText()}.
            </p>
          </div>
        )
      ) : (
        <div className={styles.modalContainer}>
          <div className={styles.cancelBtn}>
            <IconButton onClick={onCloseHandler}>
              <CloseIcon />
            </IconButton>
          </div>
          <p className={styles.question}>
            Are you sure you want to delete {shownDeletedText()}?
          </p>
          {isDeleteUsersLoading ||
          isDeleteAssetsLoading ||
          isDeleteAssetFormLoading ? (
            <div className={styles.loadingSpinnerContainer}>
              <LoadingSpinner />
            </div>
          ) : (
            <div className={styles.actionBtnsContainer}>
              <FormButton
                customStyle={styles.actionBtn}
                buttonVariant="contained"
                buttonType="button"
                onButtonClick={onDeleteHandler}
              >
                Yes
              </FormButton>
              <FormButton
                customStyle={styles.actionBtn}
                buttonVariant="contained"
                buttonType="button"
                onButtonClick={onCloseHandler}
              >
                No
              </FormButton>
            </div>
          )}
        </div>
      )}
    </Modal>
  );
};

export default DeleteModal;

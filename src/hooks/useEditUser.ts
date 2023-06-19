import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editUser } from "../api/UserServicesAll";

export const useEditUser = ({
  onEditUserSuccess,
  onEditUserError,
}: {
  onEditUserSuccess?: () => void;
  onEditUserError?: (error: any) => void;
}) => {
  return useMutation(editUser, {
    onSuccess: () => {
      onEditUserSuccess && onEditUserSuccess();
    },
    onError: onEditUserError,
  });
};

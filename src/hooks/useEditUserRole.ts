import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editUserRole } from "../api/UserServicesAll";

export const useEditUserRole = ({
  onEditUserSuccess,
  onEditUserError,
}: {
  onEditUserSuccess?: () => void;
  onEditUserError?: (error: any) => void;
}) => {
  return useMutation(editUserRole, {
    onSuccess: () => {
      onEditUserSuccess && onEditUserSuccess();
    },
    onError: onEditUserError,
  });
};

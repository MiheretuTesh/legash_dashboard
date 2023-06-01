import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editUser } from "../api/UserServicesAll";

export const useEditUsers = ({
  onEditUserSuccess,
  onEditUserError,
}: {
  onEditUserSuccess?: () => void;
  onEditUserError?: (error: any) => void;
}) => {
  const queryClient = useQueryClient();
  return useMutation(editUser, {
    onSuccess: () => {
      onEditUserSuccess && onEditUserSuccess();
    },
    onError: onEditUserError,
  });
};

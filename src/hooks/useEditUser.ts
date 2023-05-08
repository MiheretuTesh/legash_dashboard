import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editUser } from "../api/UsersService";
import { TABLE_LIMIT } from "../constants";

export const useEditUser = ({
  onEditUserSuccess,
  onEditUserError,
}: {
  onEditUserSuccess?: () => void;
  onEditUserError?: (error: any) => void;
}) => {
  const queryClient = useQueryClient();
  return useMutation(editUser, {
    onSuccess: () => {
      let totalResults: any = queryClient.getQueryData([
        "get-users",
        undefined,
        undefined,
      ]);
      for (
        let index = 0;
        index < totalResults.count;
        index = index + TABLE_LIMIT
      ) {
        queryClient.invalidateQueries(["get-users", TABLE_LIMIT, index]);
      }
      onEditUserSuccess && onEditUserSuccess();
    },
    onError: onEditUserError,
  });
};

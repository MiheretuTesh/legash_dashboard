import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addUser } from "../api/UsersService";
import { TABLE_LIMIT } from "../constants";

export const useAddUser = ({
  onAddUserSuccess,
  onAddUserError,
}: {
  onAddUserSuccess?: () => void;
  onAddUserError?: (error: any) => void;
}) => {
  const queryClient = useQueryClient();
  return useMutation(addUser, {
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
      onAddUserSuccess && onAddUserSuccess();
    },
    onError: onAddUserError,
  });
};

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUsers } from "../api/UsersService";
import { TABLE_LIMIT } from "../constants";

export const useDeleteUsers = ({
  onDeleteUsersSuccess,
}: {
  onDeleteUsersSuccess?: () => void;
}) => {
  const queryClient = useQueryClient();
  return useMutation(deleteUsers, {
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
      onDeleteUsersSuccess && onDeleteUsersSuccess();
    },
  });
};

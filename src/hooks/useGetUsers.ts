import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../api/UsersService";

export const useGetUsers = ({
  limit,
  offset,
  onGetUsersSuccess,
}: {
  limit?: number;
  offset?: number;
  onGetUsersSuccess?: (data: any) => void;
}) => {
  const { data: dataUsers, isLoading: isLoadingUsers } = useQuery(
    ["get-users", limit, offset],
    () => getUsers({ limit, offset }),
    { onSuccess: onGetUsersSuccess }
  );

  return { dataUsers, isLoadingUsers };
};

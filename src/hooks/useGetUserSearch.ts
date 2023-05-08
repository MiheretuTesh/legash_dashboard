import { useQuery } from "@tanstack/react-query";
import { searchUser } from "../api/UsersService";

export const useGetUserSearch = ({
  search_value,
  }: {
  search_value: string,
}) => {
  const {data: userSearchData, isLoading: userSearchIsLoading, isSuccess: userSearchIsSuccess, refetch: userSearchRefetch} =
      useQuery(['user_search_get'], ()=> searchUser(search_value),{refetchOnWindowFocus:false,enabled:false});

  return {userSearchData, userSearchIsLoading, userSearchIsSuccess, userSearchRefetch};
};
import { useQuery } from "@tanstack/react-query";
import { getUserProfileData } from "../api/UsersService";

export const useGetUserProfileData = ({
  onGetUserProfileDataSuccess,
}: {
  onGetUserProfileDataSuccess?: () => void;
}) => {
  const { data: dataUserProfile, isLoading: isGetUserProfileDataLoading } =
    useQuery(["get-user-profile"], () => getUserProfileData(), {
      onSuccess: onGetUserProfileDataSuccess,
    });

  return { dataUserProfile, isGetUserProfileDataLoading };
};

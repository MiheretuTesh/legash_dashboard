import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../api/UserServicesAll";

export const useGetAllUsers = ({
  onGetHospitalsSuccess,
}: {
  onGetHospitalsSuccess?: () => void;
}) => {
  const {
    data: dataUsers,
    isLoading: isLoadingUsers,
    isSuccess,
  } = useQuery(["get-users"], () => getAllUsers(), {
    onSuccess: onGetHospitalsSuccess,
  });

  return { dataUsers, isLoadingUsers, isSuccess };
};

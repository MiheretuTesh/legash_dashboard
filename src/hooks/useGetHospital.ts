import { useQuery } from "@tanstack/react-query";
import { getHospital } from "../api/HospitalService";

export const useGetHospital = ({
  id,
  onGetHospitalSuccess,
}: {
  id: number;
  onGetHospitalSuccess: () => void;
}) => {
  const {
    data: dataHospital,
    isLoading: isDataHospitalLoading,
    isSuccess: isDataHospitalSuccess,
  } = useQuery(["get-asset-form", id], () => getHospital({ id }), {
    onSuccess: onGetHospitalSuccess,
  });

  return {
    dataHospital,
    isDataHospitalLoading,
    isDataHospitalSuccess,
  };
};

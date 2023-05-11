import { useQuery } from "@tanstack/react-query";
import { getAllHospitals } from "../api/HospitalService";

export const useGetHospitals = ({
  onGetHospitalsSuccess,
}: {
  onGetHospitalsSuccess?: () => void;
}) => {
  const {
    data: dataHospitals,
    isLoading: isLoadingHospitals,
    isSuccess,
  } = useQuery(["get-hospitals"], () => getAllHospitals(), {
    onSuccess: onGetHospitalsSuccess,
  });

  return { dataHospitals, isLoadingHospitals, isSuccess };
};

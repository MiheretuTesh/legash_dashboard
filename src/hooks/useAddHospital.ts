import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addHospital } from "../api/HospitalService";
import { TABLE_LIMIT } from "../constants";

export const useAddHospital = ({
  onSuccess,
  onError,
}: {
  onSuccess: () => void;
  onError: (error: any) => void;
}) => {
  return useMutation(addHospital, { onSuccess, onError });
};

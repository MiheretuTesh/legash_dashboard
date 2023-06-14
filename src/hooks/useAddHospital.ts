import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addHospital } from "../api/HospitalService";

export const useAddHospital = ({
  onSuccess,
  onError,
}: {
  onSuccess: (x: any, values: any) => void;
  onError: (error: any) => void;
}) => {
  return useMutation(addHospital, { onSuccess, onError });
};
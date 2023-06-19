import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editHospital } from "../api/HospitalService";

export const useEditHospital = ({
  onEditHospitalSuccess,
  onEditHospitalError,
}: {
  onEditHospitalSuccess?: () => void;
  onEditHospitalError?: (error: any) => void;
}) => {
  return useMutation(editHospital, {
    onSuccess: () => {
      onEditHospitalSuccess && onEditHospitalSuccess();
    },
    onError: onEditHospitalError,
  });
};

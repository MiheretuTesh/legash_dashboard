import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editHospital } from "../api/HospitalService";

export const useEditHospital = ({
  onEditUserSuccess,
  onEditUserError,
}: {
  onEditUserSuccess?: () => void;
  onEditUserError?: (error: any) => void;
}) => {
  const queryClient = useQueryClient();
  return useMutation(editHospital, {
    onSuccess: () => {
      onEditUserSuccess && onEditUserSuccess();
    },
    onError: onEditUserError,
  });
};

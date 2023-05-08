import { useMutation } from "@tanstack/react-query";
import { resetPassword } from "../api/PasswordService";

export const useResetPassword = ({
  onSuccess,
}: {
  onSuccess?: (data: any) => void;
}) => {
  return useMutation(resetPassword, { onSuccess });
};

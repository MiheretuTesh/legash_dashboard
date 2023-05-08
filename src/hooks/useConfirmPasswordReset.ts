import { useMutation } from "@tanstack/react-query";
import { confirmPasswordReset } from "../api/PasswordService";

export const useConfirmPasswordReset = ({
  onSuccess,
}: {
  onSuccess: () => void;
}) => {
  return useMutation(confirmPasswordReset, { onSuccess });
};

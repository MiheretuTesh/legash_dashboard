import { useMutation } from "@tanstack/react-query";
import { changePassword } from "../api/PasswordService";

export const useChangePassword = ({ onSuccess }: { onSuccess: () => void }) => {
  return useMutation(changePassword, { onSuccess });
};

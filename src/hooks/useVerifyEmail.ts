import { useMutation } from "@tanstack/react-query";
import { verifyEmail } from "../api/AuthenticationService";

export const useVerifyEmail = ({ onSuccess }: { onSuccess: () => void }) => {
  return useMutation(verifyEmail, { onSuccess });
};

import { useMutation } from "@tanstack/react-query";
import { login } from "../api/AuthenticationService";

export const useLogin = ({
  onSuccess,
  onError,
}: {
  onSuccess: (data: any) => void;
  onError: (error: any) => void;
}) => {
  return useMutation(login, { onSuccess, onError });
};

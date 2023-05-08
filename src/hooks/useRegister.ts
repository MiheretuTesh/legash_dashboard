import { useMutation } from "@tanstack/react-query";
import { register } from "../api/AuthenticationService";
import { RegistrationFormValues } from "../types";

export const useRegister = ({
  onSuccess,
  onError,
}: {
  onSuccess: (x: any, values: RegistrationFormValues) => void;
  onError: (error: any) => void;
}) => {
  return useMutation(register, { onSuccess, onError });
};

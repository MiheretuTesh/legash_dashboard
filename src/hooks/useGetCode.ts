import { useMutation } from "@tanstack/react-query";
import { getCode } from "../api/AuthenticationService";

export const useGetCode = () => {
  return useMutation(getCode);
};

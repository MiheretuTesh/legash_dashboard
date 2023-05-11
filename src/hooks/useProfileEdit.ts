import { useMutation } from "@tanstack/react-query";

import { userProfileEdit } from "../api/UsersService";

export const useProfileEdit = ({
  onSuccess,
}: {
  onSuccess: (data: any) => void;
}) => {
  return useMutation(userProfileEdit, { onSuccess });
};

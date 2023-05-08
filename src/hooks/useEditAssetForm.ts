import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editAssetForm } from "../api/AssetsService";

export const useEditAssetForm = ({
  onEditAssetFormSuccess,
}: {
  onEditAssetFormSuccess?: () => void;
}) => {
  const queryClient = useQueryClient();
  return useMutation(editAssetForm, {
    onSuccess: () => {
      queryClient.invalidateQueries([
        "get-assets-draft-forms",
        undefined,
        undefined,
      ]);
      queryClient.invalidateQueries([
        "get-assets-submitted-forms",
        undefined,
        undefined,
      ]);
      onEditAssetFormSuccess && onEditAssetFormSuccess();
    },
  });
};

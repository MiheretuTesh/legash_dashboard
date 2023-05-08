import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteAssetForm } from "../api/AssetsService";

export const useDeleteAssetForm = ({
  onDeleteAssetFormSuccess,
  formType,
}: {
  onDeleteAssetFormSuccess: () => void;
  formType?: "draft" | "submitted";
}) => {
  const queryClient = useQueryClient();
  return useMutation(deleteAssetForm, {
    onSuccess: () => {
      switch (formType) {
        case "draft":
          queryClient.invalidateQueries(["get-assets-draft-forms"]);
          break;
        case "submitted":
          queryClient.invalidateQueries(["get-assets-submitted-forms"]);
          break;
        default:
          break;
      }
      onDeleteAssetFormSuccess && onDeleteAssetFormSuccess();
    },
  });
};

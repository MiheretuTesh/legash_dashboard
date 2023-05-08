import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editAsset } from "../api/AssetsService";
import { TABLE_LIMIT } from "../constants";

export const useEditAsset = ({
  onEditAssetSuccess,
}: {
  onEditAssetSuccess?: () => void;
}) => {
  const queryClient = useQueryClient();
  return useMutation(editAsset, {
    onSuccess: () => {
      let totalResults: any = queryClient.getQueryData([
        "get-assets",
        undefined,
        undefined,
      ]);
      for (
        let index = 0;
        index < totalResults.count;
        index = index + TABLE_LIMIT
      ) {
        queryClient.invalidateQueries(["get-assets", TABLE_LIMIT, index]);
      }
      onEditAssetSuccess && onEditAssetSuccess();
    },
  });
};

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addAsset } from "../api/AssetsService";
import { TABLE_LIMIT } from "../constants";

export const useAddAsset = ({
  onAddAssetSuccess,
}: {
  onAddAssetSuccess?: () => void;
}) => {
  const queryClient = useQueryClient();
  return useMutation(addAsset, {
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
      onAddAssetSuccess && onAddAssetSuccess();
    },
  });
};

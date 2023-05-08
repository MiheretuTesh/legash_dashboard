import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteAssets } from "../api/AssetsService";
import { TABLE_LIMIT } from "../constants";

export const useDeleteAssets = ({
  onDeleteAssetsSuccess,
}: {
  onDeleteAssetsSuccess?: () => void;
}) => {
  const queryClient = useQueryClient();
  return useMutation(deleteAssets, {
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
      onDeleteAssetsSuccess && onDeleteAssetsSuccess();
    },
  });
};

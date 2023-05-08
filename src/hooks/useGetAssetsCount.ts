import { useQuery } from "@tanstack/react-query";
import { getAssets } from "../api/AssetsService";

export const useGetAssetCount = ({
  limit,
  offset,
  onGetAssetsSuccess,
}: {
  limit?: number;
  offset?: number;
  onGetAssetsSuccess?: () => void;
}) => {
  const { data: dataAssets} = useQuery(
    ["get-assets", limit, offset],
    () =>
      getAssets({
        limit,
        offset,
      }),
    { onSuccess: onGetAssetsSuccess }
  );

  return { dataAssets };
};

import { useQuery } from "@tanstack/react-query";
import {DownloadAssetImg} from "../api/DownloadPdfService"

export const useDownloadAssetImg = ({
  asset_id,
  }: {
  asset_id: number,
}) => {
  // @ts-ignore
  const {data: imgData, isLoading, refetch, isSuccess, fetchStatus} =
      useQuery(['asset-image-download'], ()=> DownloadAssetImg(asset_id),{refetchOnWindowFocus:false,enabled:false});

  console.log(asset_id, "asset")

  return {imgData, isLoading, refetch, isSuccess, fetchStatus};
};
import { useQuery } from "@tanstack/react-query";
import {searchAsset} from "../api/AssetsService";

export const useGetAssetSearch = ({
  search_value,
  }: {
  search_value: string,
}) => {
  const {data: assetSearchData, isLoading: assetSearchIsLoading, isSuccess: assetSearchIsSuccess, refetch: assetSearchRefetch} =
      useQuery(['asset_search_get'], ()=> searchAsset(search_value),{refetchOnWindowFocus:false,enabled:false});

  return {assetSearchData, assetSearchIsLoading, assetSearchIsSuccess, assetSearchRefetch};
};
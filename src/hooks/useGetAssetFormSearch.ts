import { useQuery } from "@tanstack/react-query";
import { searchAssetForm } from "../api/AssetsService";

export const useGetAssetFormSearch = ({
  search_value,
  }: {
  search_value: string,
}) => {
  const {data: assetFormData, isLoading: assetFormLoading, isSuccess: assetFormSuccess, refetch: assetFormRefetch} =
      useQuery(['asset_form_search_get'], ()=> searchAssetForm(search_value),{refetchOnWindowFocus:false,enabled:false});

  return {assetFormData, assetFormLoading, assetFormSuccess, assetFormRefetch};
};
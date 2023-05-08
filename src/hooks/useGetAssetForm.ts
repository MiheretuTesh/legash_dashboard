import { useQuery } from "@tanstack/react-query";
import { getAssetForm } from "../api/AssetsService";

export const useGetAssetForm = ({
  id,
  onGetAssetFormSuccess,
}: {
  id: number;
  onGetAssetFormSuccess: () => void;
}) => {
  const { data: dataAssetForm, isLoading: isDataAssetFormLoading } = useQuery(
    ["get-asset-form", id],
    () => getAssetForm({ id }),
    {
      onSuccess: onGetAssetFormSuccess,
    }
  );

  return {
    dataAssetForm,
    isDataAssetFormLoading,
  };
};

import { useQuery } from "@tanstack/react-query";
import { getAssetsForms } from "../api/AssetsService";

export const useGetAssetsSubmittedForms = (obj: {
  limit?: number;
  offset?: number;
  isDraft: boolean;
  type?: string;
  onGetAssetsSubmittedFormsSuccess?: () => void;
}) => {
  const {
    data: dataAssetsSubmittedForms,
    isLoading: isDataAssetsSubmittedFormsLoading,
  } = useQuery(
    ["get-assets-submitted-forms", obj.limit, obj.offset],
    () =>
      getAssetsForms({
        limit: obj.limit,
        offset: obj.offset,
        isDraft: obj.isDraft,
        type: obj.type,
      }),
    {
      onSuccess: obj.onGetAssetsSubmittedFormsSuccess,
    }
  );

  return {
    dataAssetsSubmittedForms,
    isDataAssetsSubmittedFormsLoading,
  };
};

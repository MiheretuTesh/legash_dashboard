import { useQuery } from "@tanstack/react-query";
import { getAssetsForms } from "../api/AssetsService";

export const useGetAssetsDraftForms = ({
    limit,
    offset,
    isDraft,
    type,
    onGetAssetsDraftFormsSuccess,
}:{
    limit?: number;
    offset?: number;
    isDraft:boolean;
    type?: string | undefined;
    onGetAssetsDraftFormsSuccess?: () => void;
}) => {
  const {
    data: dataAssetsDraftForms,
    isLoading: isDataAssetsDraftFormsLoading,
  } = useQuery(
    ["get-assets-draft-forms", limit, offset],
    () =>
      getAssetsForms({
        limit,
        offset,
        isDraft,
        type,
      }),
    {
      onSuccess: onGetAssetsDraftFormsSuccess,
    }
  );

  return {
    dataAssetsDraftForms,
    isDataAssetsDraftFormsLoading,
  };
};
//
// export const useGetAssetsDraftForms = ({
//   limit,
//   offset,
//   isDraft,
//   type,
//   onGetAssetsDraftFormsSuccess,
// }) => {
//   const {
//     data: dataAssetsDraftForms,
//     isLoading: isDataAssetsDraftFormsLoading,
//   } = useQuery(
//     ["get-assets-draft-forms", obj.limit, obj.offset],
//     () =>
//       getAssetsForms({
//         limit: obj.limit,
//         offset: obj.offset,
//         isDraft: obj.isDraft,
//         type: obj.type,
//       }),
//     {
//       onSuccess: obj.onGetAssetsDraftFormsSuccess,
//     }
//   );
//
//   return {
//     dataAssetsDraftForms,
//     isDataAssetsDraftFormsLoading,
//   };
// };

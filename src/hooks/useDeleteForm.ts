import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteAssetForm } from "../api/AssetsService";
import {TABLE_LIMIT} from "../constants";

export const useDeleteForm = ({
    onDeleteAssetSuccess,
}:{
    onDeleteAssetSuccess?: () => void;
}) => {
    const queryClient = useQueryClient();

    return useMutation(deleteAssetForm, {
        onSuccess: () => {
            let totalResults: any = queryClient.getQueriesData([
                "get-assets-draft-forms",
                undefined,
                undefined,
            ]);
            for (
                let index = 0;
                index < totalResults.count;
                index = index + TABLE_LIMIT
            ) {
                queryClient.invalidateQueries(["get-assets-draft-forms", TABLE_LIMIT, index]);
            }
            onDeleteAssetSuccess && onDeleteAssetSuccess();
        }
    })
};
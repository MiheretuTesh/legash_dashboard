import { useMutation } from "@tanstack/react-query";
import {createAssetForm, updateAssetForm} from "../api/AssetsService";

export const useAssumptionForm = ({ onSuccess }: { onSuccess: (data: any) => void }) => {
    return useMutation(createAssetForm, { onSuccess });
};

export const useUpdateAssumptionFrom = ({ onSuccess } : { onSuccess: (data: any) => void}) => {
    return useMutation(updateAssetForm, {onSuccess})
}
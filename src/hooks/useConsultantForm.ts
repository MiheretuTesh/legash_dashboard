import { useMutation } from "@tanstack/react-query";
import { createAssetForm } from "../api/ConsultantService";
import {updateAssetForm} from "../api/AssetsService";

export const useConsultantForm = ({ onSuccess }: { onSuccess: (data: any) => void }) => {
    return useMutation(createAssetForm, { onSuccess });
};

export const useUpdateConsultantForm = ({ onSuccess }: { onSuccess: (data: any) => void}) => {
    return useMutation(updateAssetForm, { onSuccess });
};
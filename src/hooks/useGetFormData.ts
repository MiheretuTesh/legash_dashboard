import { useQuery } from "@tanstack/react-query";
import { getFormData } from "../api/AssetsService";

export const useGetFormData = ({
      id,
      onGetFormSuccess,
    }: {
    id: number;
    onGetFormSuccess: () => void;
}) => {
    const { data: dataForm, isLoading: isDataFormLoading, isSuccess: isDataFormSuccess } = useQuery(
        ["get-form-data", id],
        () => getFormData({ id }),
        {
            onSuccess: onGetFormSuccess,
        }
    );

    return {
        dataForm,
        isDataFormLoading,
        isDataFormSuccess
    };
};

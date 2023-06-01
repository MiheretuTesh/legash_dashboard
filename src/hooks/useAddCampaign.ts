import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCampaign } from "../api/CampaignService";

export const useAddCampaign = ({
  onSuccess,
  onError,
}: {
  onSuccess: (x: any, values: any) => void;
  onError: (error: any) => void;
}) => {
  return useMutation(addCampaign, { onSuccess, onError });
};
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editCampaign } from "../api/CampaignService";

export const useEditCampaign = ({
  onEditCampaignSuccess,
  onEditCampaignError,
}: {
  onEditCampaignSuccess?: () => void;
  onEditCampaignError?: (error: any) => void;
}) => {
  return useMutation(editCampaign, {
    onSuccess: () => {
      onEditCampaignSuccess && onEditCampaignSuccess();
    },
    onError: onEditCampaignError,
  });
};

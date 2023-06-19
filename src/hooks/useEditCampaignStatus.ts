import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editCampaignStatus } from "../api/CampaignService";

export const useEditCampaignStatus = ({
  onEditCampaignSuccess,
  onEditCampaignError,
}: {
  onEditCampaignSuccess?: () => void;
  onEditCampaignError?: (error: any) => void;
}) => {
  return useMutation(editCampaignStatus, {
    onSuccess: () => {
      onEditCampaignSuccess && onEditCampaignSuccess();
    },
    onError: onEditCampaignError,
  });
};

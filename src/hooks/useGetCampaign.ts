import { useQuery } from "@tanstack/react-query";
import { getCampaign } from "../api/CampaignService";

export const useGetCampaign = ({
  id,
  onGetCampaignSuccess,
}: {
  id: number;
  onGetCampaignSuccess: () => void;
}) => {
  const {
    data: dataCampaign,
    isLoading: isDataCampaignLoading,
    isSuccess: isDataCampaignSuccess,
  } = useQuery(["get-asset-form", id], () => getCampaign({ id }), {
    onSuccess: onGetCampaignSuccess,
  });

  return {
    dataCampaign,
    isDataCampaignLoading,
    isDataCampaignSuccess,
  };
};

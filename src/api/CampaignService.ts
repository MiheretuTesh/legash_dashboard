import AxiosInstance from "./AxiosInstance";

export const getAllCampaigns = async () => {
  const { data } = await AxiosInstance.get(`campaigns`);
  return data;
};

export const getCampaign = async (obj: { id: number }) => {
  const { data } = await AxiosInstance.get(`campaigns/${obj.id}`);
  return data;
};

export const addCampaign = (obj: any) => {
  return AxiosInstance.post("campaigns", obj);
};

export const editCampaign = ({ obj, id }: any) => {
  return AxiosInstance.patch(`campaigns/${id}`, obj);
};

export const deleteCampaign = (obj: { ids: number[] }) => {
  return AxiosInstance.post(`assets/delete/`, { ids: obj.ids });
};

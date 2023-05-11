import AxiosInstance from "./AxiosInstance";

export const getAllCampaigns = async () => {
  const { data } = await AxiosInstance.get(`hospitals`);
  return data;
};

export const getCampaign = async (obj: { id: number }) => {
  const { data } = await AxiosInstance.get(`hospitals/${obj.id}`);
  return data;
};

export const addCampaign = ({
  obj,
}: {
  obj: {
    building: string;
    location?: string;
    details?: string;
    users?: number[];
    edited_by?: number;
  };
}) => {
  return AxiosInstance.post("hospitals", {
    building: obj.building,
    location: obj.location,
    details: obj.details,
    users: obj.users,
    edited_by: obj.edited_by,
  });
};

export const editCampaign = ({
  obj,
  id,
}: {
  obj: {
    building: string;
    location?: string;
    details?: string;
    users?: number[];
  };
  id: string;
}) => {
  return AxiosInstance.patch(`hospitals/${id}`, {
    building: obj.building,
    location: obj.location,
    details: obj.details,
    users: obj.users,
  });
};

export const deleteCampaign = (obj: { ids: number[] }) => {
  return AxiosInstance.post(`assets/delete/`, { ids: obj.ids });
};

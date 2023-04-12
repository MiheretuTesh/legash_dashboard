import AxiosInstance from "./AxiosInstance";

export const getAllHospitals = async () => {
  const { data } = await AxiosInstance.get(`hospitals`);
  return data;
};

export const getHospital = async (obj: { id: number }) => {
  const { data } = await AxiosInstance.get(`hospitals/fetch/${obj.id}`);
  return data;
};

export const addHospital = (obj: any) => {
  return AxiosInstance.post("hospitals", obj);
};

export const editHospital = ({ obj, id }: any) => {
  return AxiosInstance.patch(`hospitals/${id}`, obj);
};

export const deleteHospital = (obj: { ids: number[] }) => {
  return AxiosInstance.post(`assets/delete/`, { ids: obj.ids });
};

import AxiosInstance from "./AxiosInstance";

export const getAllHospitals = async () => {
  const { data } = await AxiosInstance.get(`hospitals`);
  console.log(data, "Hospital Data");
  return data;
};

export const getHospital = async (obj: { id: number }) => {
  const { data } = await AxiosInstance.get(`hospitals/${obj.id}`);
  return data;
};

export const addHospital = ({ obj }: any) => {
  console.log(obj, "OBJ");
  return AxiosInstance.post("hospitals", {
    name: obj.name,
    location: obj.location,
    phone: obj.phone,
    email: obj.email,
    website: obj.website,
    hospitalAdmins: obj.hospitalAdmins,
    services: obj.services,
    bankAccounts: obj.bankAccounts,
  });
};

export const editHospital = ({
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

export const deleteHospital = (obj: { ids: number[] }) => {
  return AxiosInstance.post(`assets/delete/`, { ids: obj.ids });
};

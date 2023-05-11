import AxiosInstance from "./AxiosInstance";

export const getAllUsers = async () => {
  const { data } = await AxiosInstance.get(`hospitals`);
  return data;
};

export const getUser = async (obj: { id: number }) => {
  const { data } = await AxiosInstance.get(`hospitals/${obj.id}`);
  return data;
};

export const addUser = ({
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

export const editUser = ({
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

export const deleteUser = (obj: { ids: number[] }) => {
  return AxiosInstance.post(`assets/delete/`, { ids: obj.ids });
};

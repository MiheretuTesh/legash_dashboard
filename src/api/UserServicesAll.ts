import AxiosInstance from "./AxiosInstance";

export const getAllUsers = async () => {
  const { data } = await AxiosInstance.get(`users`);
  return data;
};

export const getUser = async (obj: { id: number }) => {
  const { data } = await AxiosInstance.get(`users/${obj.id}`);
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
  return AxiosInstance.post("users", {
    building: obj.building,
    location: obj.location,
    details: obj.details,
    users: obj.users,
    edited_by: obj.edited_by,
  });
};

export const editUser = ({ formData, id }: any) => {
  console.log(formData);
  return AxiosInstance.patch(`/users/${id}`, formData);
};

export const editUserRole = (obj: any) => {
  console.log(obj);
  return AxiosInstance.patch(`restricted/updateRole`, {
    email: obj.email,
    roleId: obj.roleId,
    occupation: {
      occupationType: obj.occupationType,
      workPlaceId: obj.workPlaceId,
    },
  });
};

export const deleteUser = (id: any) => {
  return AxiosInstance.delete(`users/${id}`);
};

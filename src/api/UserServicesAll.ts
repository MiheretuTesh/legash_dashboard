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

export const editUser = ({ obj, id }: any) => {
  console.log(obj, id);
  return AxiosInstance.patch(`users/${id}`, {
    firstName: obj.firstName,
    lastName: obj.lastName,
    email: obj.email,
    role: "645e44069e60637d858a265f",
  });
};

export const deleteUser = (id: any) => {
  return AxiosInstance.delete(`users/${id}`);
};

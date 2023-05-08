import AxiosInstance, {AxiosDynamicContentType} from "./AxiosInstance";

export const getUsers = async (obj: { limit?: number; offset?: number }) => {
  const { data } = await AxiosInstance.get(
    `users/list/${obj.limit || obj.offset ? "?" : ""}${
      obj.limit ? `limit=${obj.limit}` : ""
    }${obj.limit && obj.offset ? "&" : ""}${
      obj.offset ? `offset=${obj.offset}` : ""
    }`
  );
  return data;
};
export const addUser = ({
  obj,
}: {
  obj: {
    firstName?: string;
    lastName?: string;
    email: string;
    role?: string;
    assets: number[];
  };
}) => {
  return AxiosInstance.post("users/create/", {
    email: obj.email,
    first_name: obj.firstName,
    last_name: obj.lastName,
    type: obj.role,
    assets: obj.assets,
  });
};

export const editUser = ({
  obj,
  id,
}: {
  obj: {
    firstName?: string;
    lastName?: string;
    email: string;
    jobTitle?: string;
    company?: string;
    role?: string;
    assets: number[];
  };
  id: string;
}) => {
  return AxiosInstance.patch(`users/${id}/`, {
    first_name: obj.firstName,
    last_name: obj.lastName,
    email: obj.email,
    job_title: obj.jobTitle,
    company: obj.company,
    type: obj.role,
    assets: obj.assets,
  });
};
export const userProfileEdit = (obj: any) => {
  return AxiosDynamicContentType("multipart/form-data").patch(`users/profile/`, obj);

};
export const deleteUsers = (obj: { ids: number[] }) => {
  return AxiosInstance.post(`users/delete/`, { ids: obj.ids });
};

export const getUserProfileData = async () => {
  const { data } = await AxiosInstance.get("users/profile/");
  return data;
};

export const getUserProfile = () => {
  return AxiosInstance.get(`users/profile/`);
};

export const searchUser = async (searchValue: string) => {
  return AxiosInstance.get(`users/list?search=${searchValue}`);
};
import AxiosInstance from "./AxiosInstance";

export const getAllHospitals = async () => {
  const { data } = await AxiosInstance.get(`hospitals`);
  return data;
};

export const getHospital = async (obj: { id: number }) => {
  const { data } = await AxiosInstance.get(`hospitals/${obj.id}`);
  return data;
};

// export const addHospital = ({ obj }: any) => {
//   console.log(obj, "OBJ");
//   return AxiosInstance.post("hospitals", {
//     name: obj.name,
//     location: obj.location,
//     phone: obj.phone,
//     email: obj.email,
//     website: obj.website,
//     hospitalAdmins: obj.hospitalAdmins,
//     services: obj.services,
//     bankAccounts: obj.bankAccounts,
//   });
// };

export const addHospital = (obj: any) => {
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

export const editHospital = ({ obj, id }: any) => {
  console.log(obj, id);
  return AxiosInstance.patch(`hospitals/${id}`, {
    name: obj.name,
    email: obj.email,
    location: obj.location,
    phone: obj.phone,
    bankAccounts: obj.bankAccounts,
    website: obj.website,
  });
};

export const deleteHospital = (obj: { ids: number[] }) => {
  return AxiosInstance.post(`assets/delete/`, { ids: obj.ids });
};

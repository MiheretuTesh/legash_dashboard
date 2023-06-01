import AxiosInstance from "./AxiosInstance";

export const getAllCampaigns = async () => {
  const { data } = await AxiosInstance.get(`campaigns`);
  return data;
};

export const getCampaign = async (obj: { id: number }) => {
  const { data } = await AxiosInstance.get(`hospitals/${obj.id}`);
  return data;
};

export const addCampaign = (obj: any) => {
  return AxiosInstance.post("campaigns", {
    // patientId: obj.patientId,
    patientId: "645deff325c039ad7a152d1f",

    // hospitalId: obj.hospitalId,
    hospitalId: "645df3d525c039ad7a152d26",

    targetFunding: obj.targetFunding,
    treatmentRequired: obj.treatmentRequired,
    diagnosis: obj.diagnosis,
    startDate: obj.startDate,
    endDate: obj.endDate,
    currentFundedAmount: obj.currentFundedAmount,
  });
};

export const editCampaign = ({ obj, id }: any) => {
  console.log(obj, id, "OBJ ID");
  return AxiosInstance.patch(`campaigns/${id}`, {
    targetFunding: obj.targetFunding,
    startDate: obj.startDate,
    endDate: obj.endDate,
    currentFundedAmount: obj.currentFundedAmount,
    diagnosis: obj.diagnosis,
    status: obj.status,
  });
};
// export const editCampaign = ({
//   obj,
//   id,
// }: {
//   obj: {
//     building: string;
//     location?: string;
//     details?: string;
//     users?: number[];
//   };
//   id: string;
// }) => {
//   return AxiosInstance.patch(`hospitals/${id}`, {
//     building: obj.building,
//     location: obj.location,
//     details: obj.details,
//     users: obj.users,
//   });
// };

export const deleteCampaign = (obj: { ids: number[] }) => {
  return AxiosInstance.post(`assets/delete/`, { ids: obj.ids });
};

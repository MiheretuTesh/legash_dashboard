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
    patientId: obj.patientId,
    hospitalId: obj.hospitalId,
    targetFunding: obj.targetFunding,
    treatmentRequired: obj.treatmentRequired,
    diagnosis: obj.diagnosis,
    startDate: obj.startDate,
    endDate: obj.endDate,
    currentFundedAmount: obj.currentFundedAmount,
    coverImage: obj.coverImage,
  });
};

export const editCampaign = ({ obj, id }: any) => {
  console.log(obj, id, "OBJ ID");
  return AxiosInstance.patch(`campaigns/${id}`, {
    targetFunding: obj.targetFunding,
    currentFundedAmount: obj.currentFundedAmount,
    diagnosis: obj.diagnosis,
    status: obj.status,
    coverImage: obj.coverImage,
    treatmentRequired: obj.treatmentRequired,
  });
};

export const deleteCampaign = (obj: { ids: number[] }) => {
  return AxiosInstance.post(`assets/delete/`, { ids: obj.ids });
};

import AxiosInstance from "./AxiosInstance";
import { AssumtionFormValues } from "../types";

export const getAssets = async (obj: { limit?: number; offset?: number }) => {
  const { data } = await AxiosInstance.get(
    `assets/list/${obj.limit || obj.offset ? "?" : ""}${
      obj.limit ? `limit=${obj.limit}` : ""
    }${obj.limit && obj.offset ? "&" : ""}${
      obj.offset ? `offset=${obj.offset}` : ""
    }`
  );
  return data;
};

export const addAsset = ({
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
  return AxiosInstance.post("assets/create/", {
    building: obj.building,
    location: obj.location,
    details: obj.details,
    users: obj.users,
    edited_by: obj.edited_by,
  });
};

export const editAsset = ({
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
  return AxiosInstance.patch(`assets/${id}`, {
    building: obj.building,
    location: obj.location,
    details: obj.details,
    users: obj.users,
  });
};

export const deleteAssets = (obj: { ids: number[] }) => {
  return AxiosInstance.post(`assets/delete/`, { ids: obj.ids });
};

export const createAssetForm = (obj: AssumtionFormValues) => {
  return AxiosInstance.post("assets/form/create", obj);
};

export const updateAssetForm = (obj: any) => {
  return AxiosInstance.patch(`/assets/form/${obj?.id}`, obj);
};

export const getAssetsForms = async (obj: {
  limit?: number;
  offset?: number;
  isDraft: boolean;
  type?: string;
}) => {
  const { data } = await AxiosInstance.get(
    `assets/form/list?is_draft=${obj.isDraft}&type=${obj.type}${
      obj.limit ? `&limit=${obj.limit}` : ""
    }${obj.offset ? `&offset=${obj.offset}` : ""}`
  );
  return data;
};

export const getAssetForm = async (obj: { id: number }) => {
  const { data } = await AxiosInstance.get(`assets/form/${obj.id}`);
  return data;
};

export const getFormData = async (obj: { id: number }) => {
  const { data } = await AxiosInstance.get(`assets/form/${obj.id}`);
  return data;
};

export const editAssetForm = async (obj: {
  data: any;
  isDraft: boolean;
  type: string;
  formId: number;
  assetId: number;
}) => {
  return AxiosInstance.patch(`assets/form/${obj.formId}`, {
    data: obj.data,
    is_draft: obj.isDraft,
    type: obj.type,
    asset: obj.assetId,
  });
};

export const deleteAssetForm = async (obj: { formId: number }) => {
  return AxiosInstance.delete(`assets/form/${obj.formId}`);
};

export const searchAsset = async (searchValue: string) => {
  return AxiosInstance.get(`assets/list?search=${searchValue}`);
};

export const searchAssetForm = async (searchValue: string) => {
  return AxiosInstance.get(`assets/form/list?search=${searchValue}`);
};

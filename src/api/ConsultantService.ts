import {NewOnSiteChecklistFormValues} from "../types";
import AxiosInstance from "./AxiosInstance";

export const createAssetForm = (obj: NewOnSiteChecklistFormValues) => {
    return AxiosInstance.post("assets/form/create", obj);
};
import AxiosInstance from "./AxiosInstance";


export const admin_logs = () => {
    return AxiosInstance.get("events/list/?limit=10")
};
export const getAdminAssetMetrics = () => {

    return AxiosInstance.get("assets/metrics");

};
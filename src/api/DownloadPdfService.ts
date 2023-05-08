import AxiosInstance from "./AxiosInstance";

export const DownloadPdf = (report_name:any) => {
    return AxiosInstance.get(`tables/generate-pdf/?report_name=${report_name}`);
};

export const DownloadAssetImg = (asset_id:any) => {
    return AxiosInstance.get(`assets/download-asset-images/?asset_id=${asset_id}`);
};
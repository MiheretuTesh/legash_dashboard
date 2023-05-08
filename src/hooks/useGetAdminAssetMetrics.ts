import { useQuery } from "@tanstack/react-query";

import { getAdminAssetMetrics } from "../api/AdminService";

export const useGetAdminAssetMetrics = () => {
    return useQuery({
        queryKey: ["asset_metrics"],
        queryFn: getAdminAssetMetrics,
    });
};
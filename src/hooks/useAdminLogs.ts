import { useQuery } from "@tanstack/react-query";
import { admin_logs } from "../api/AdminService";

export const useAdminLogs = () => {
    return useQuery({queryKey:['Admin_logs'], queryFn:admin_logs});
};

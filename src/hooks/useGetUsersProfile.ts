import {useQuery} from "@tanstack/react-query";
import { getUserProfile } from "../api/UsersService";

export const useGetUsersProfile = () => {
    return useQuery({queryKey:['user_profile'], queryFn:getUserProfile});
};

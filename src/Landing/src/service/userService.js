import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/auth/signup";

export function register(user) {
  return http.post(apiEndpoint, user);
}

export default {
  register,
};

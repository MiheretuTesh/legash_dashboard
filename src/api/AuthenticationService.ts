import { LoginFormValues, RegistrationFormValues } from "../types";
import { transformRoleName } from "../utils/functions";
import AxiosInstance from "./AxiosInstance";

export const register = (obj: RegistrationFormValues) => {
  return AxiosInstance.post("auth/signup", {
    email: obj.email,
    firstName: obj.firstName,
    lastName: obj.lastName,
    role: transformRoleName(obj.role),
    password: obj.password,
    phonenumber: obj.phonenumber,
    gender: obj.gender,
    dateOfBirth: obj.dateOfBirth,
  });
};

export const login = (obj: LoginFormValues) => {
  return AxiosInstance.post("auth/login", {
    email: obj.email,
    password: obj.password,
  });
};

export const verifyEmail = (obj: {
  email: string;
  verificationCode: string;
}) => {
  return AxiosInstance.post("users/verification/verify-email/", {
    email: obj.email,
    verification_code: obj.verificationCode,
  });
};

export const getCode = (obj: { email: string }) => {
  return AxiosInstance.post("users/verification/get-code/", {
    email: obj.email,
  });
};

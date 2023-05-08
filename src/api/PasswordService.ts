import AxiosInstance from "./AxiosInstance";

export const resetPassword = (obj: { email: string }) => {
  return AxiosInstance.post("password_reset/", {
    email: obj.email,
  });
};

export const confirmPasswordReset = (obj: {
  password: string;
  token: string;
}) => {
  return AxiosInstance.post("password_reset/confirm/", {
    password: obj.password,
    token: obj.token,
  });
};

export const changePassword = (obj: {
  oldPassword: string;
  newPassword: string;
  newPasswordConfirm: string;
}) => {
  return AxiosInstance.post("users/password/change/", {
    current_password: obj.oldPassword,
    new_password: obj.newPassword,
    new_password_confirm: obj.newPasswordConfirm,
  });
};

import ax from "axios";

const AxiosInstance = ax.create({
  baseURL: "https://legashfund.onrender.com/api/v1/",
  headers: {
    Accepted: "appication/json",
    "Content-Type": "application/json",
  },
});

AxiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

/*Axios instance that receives an argument for content type*/

export const AxiosDynamicContentType = (contentType = "application/json") => {
  const instance = ax.create({
    baseURL: "https://legashfund.onrender.com/api/v1/",
    headers: {
      Accepted: "appication/json",
      "Content-Type": contentType,
    },
  });

  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
  return instance;
};

export default AxiosInstance;

import axios from "axios";

export const API_URL = "https://gateway.scan-interfax.ru/api/v1";

const api = axios.create({
    baseURL: API_URL,
});

const token = localStorage.getItem("token");

api.interceptors.request.use((config) => {
    config.headers["Content-Type"] = "application/json";

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default api;

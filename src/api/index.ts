import axios from "axios";

export const API_URL = "https://gateway.scan-interfax.ru/api/v1";

const api = axios.create({
    baseURL: API_URL,
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    config.headers["Content-Type"] = "application/json";

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default api;

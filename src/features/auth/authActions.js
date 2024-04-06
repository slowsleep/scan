import api from "@api/";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const signIn = createAsyncThunk("auth/signIn", async ({ login, password }, { rejectWithValue }) => {
    try {
        const { data } = await api.post(`account/login`, { login, password });
        localStorage.setItem("token", data.accessToken);
        localStorage.setItem("expire", data.expire);
    } catch(error) {
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
        } else {
            return rejectWithValue(error.message);
        }
    }
});

export const checkAuth = createAsyncThunk("auth/checkAuth", async (_, { rejectWithValue }) => {
    try {
        const { data } = await api.get(`account/info`);
        return data;
    } catch (error) {
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
        } else {
            return rejectWithValue(error.message);
        }
    }
});



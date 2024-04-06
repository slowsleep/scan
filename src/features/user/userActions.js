import api from "@api/";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getLimit = createAsyncThunk("user/getLimit", async (_, { rejectWithValue }) => {
    try {
        const { data } = await api.get("account/info");
        return data.eventFiltersInfo;
    } catch(error) {
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
        } else {
            return rejectWithValue(error.message);
        }
    }
});

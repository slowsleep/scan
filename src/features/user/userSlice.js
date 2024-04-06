import { createSlice } from "@reduxjs/toolkit";
import { getLimit } from "./userActions";

const initialState = {
    loading: false,
    data: null,
    errorUser: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(
                getLimit.pending, (state) => {
                    state.loading = true;
                    state.errorUser = null;
                }
            )
            .addCase(
                getLimit.fulfilled, (state, action) => {
                    state.loading = false;
                    state.data = action.payload;
                    state.errorUser = null;
                }
            )
            .addCase(
                getLimit.rejected, (state, action) => {
                    state.loading = false;
                    state.errorUser = action.payload;
                    state.data = null;
                }
            )
    },
});

export default userSlice.reducer;

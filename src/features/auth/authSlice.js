import { createSlice } from "@reduxjs/toolkit";
import { signIn, checkAuth } from "./authActions";

const initialState = {
    loading: false,
    isAuth: false,
    errorAuth: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signOut: (state) => {
            state.isAuth = false;
            localStorage.removeItem("token");
            localStorage.removeItem("expire");
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                signIn.pending, (state) => {
                    state.loading = true;
                }
            )
            .addCase(
                signIn.fulfilled, (state) => {
                    state.loading = false;
                    state.isAuth = true;
                    state.errorAuth = null;
                }
            )
            .addCase(
                signIn.rejected, (state, { payload }) => {
                    state.loading = false;
                    state.errorAuth = payload;
                    state.isAuth = false;
                }
            )

            .addCase(
                checkAuth.pending, (state) => {
                    state.loading = true;
                }
            )
            .addCase(
                checkAuth.fulfilled, (state) => {
                    state.loading = false;
                    state.isAuth = true;
                    state.errorAuth = null;
                }
            )
            .addCase(
                checkAuth.rejected, (state, action) => {
                    state.loading = false;
                    state.errorAuth = action.payload;
                    state.isAuth = false;
                }
            )
    },
});

export const { signOut } = authSlice.actions;

export default authSlice.reducer;

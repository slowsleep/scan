import { createSlice } from "@reduxjs/toolkit";
import { getHistograms, getDocuments } from "./companyActions";

const initialState = {
    loadingHistograms: false,
    loadingDocuments: false,
    histograms: null,
    documentIds: null,
    documents: null,
    errorCompany: null,
};

const companySlice = createSlice({
    name: "company",
    initialState,
    extraReducers: (builder) => {
        builder
            // getHistograms
            .addCase(
                getHistograms.pending, (state) => {
                    state.loadingHistograms = true;
                    state.errorCompany = null;
                }
            )
            .addCase(
                getHistograms.fulfilled, (state, action) => {
                    state.loadingHistograms = false;
                    state.histograms = action.payload;
                    state.errorCompany = null;
                }
            )
            .addCase(
                getHistograms.rejected, (state, action) => {
                    state.loadingHistograms = false;
                    state.errorCompany = action.payload;
                    state.data = null;
                }
            )

            // getDocuments
            .addCase(
                getDocuments.pending, (state) => {
                    state.loadingDocuments = true;
                    state.errorCompany = null;
                }
            )
            .addCase(
                getDocuments.fulfilled, (state, action) => {
                    state.loadingDocuments = false;
                    state.documents = action.payload;
                    state.errorCompany = null;
                }
            )
            .addCase(
                getDocuments.rejected, (state, action) => {
                    state.loadingDocuments = false;
                    state.errorCompany = action.payload;
                    state.data = null;
                }
            )
    },
});

export default companySlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { getHistograms, getDocumentIds, getDocuments } from "./companyActions";

const initialState = {
    loadingHistograms: false,
    loadingDocuments: false,
    loadingDocumentIds: false,
    histograms: null,
    documents: [],
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

            // getDocumentIds
            .addCase(
                getDocumentIds.pending, (state) => {
                    state.loadingDocumentIds = true;
                    state.errorCompany = null;
                }
            )
            .addCase(
                getDocumentIds.fulfilled, (state, action) => {
                    state.loadingDocumentIds = false;
                    state.errorCompany = null;
                }
            )
            .addCase(
                getDocumentIds.rejected, (state, action) => {
                    state.loadingDocumentIds = false;
                    state.errorCompany = action.payload;
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
                    state.documents = state.documents.concat(action.payload);
                    state.errorCompany = null;
                }
            )
            .addCase(
                getDocuments.rejected, (state, action) => {
                    state.loadingDocuments = false;
                    state.errorCompany = action.payload;
                }
            )
    },
});

export default companySlice.reducer;

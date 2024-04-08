import api from "@api/";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getHistograms = createAsyncThunk(
    "company/getHistograms",
    async (
        { searchObject },
        { rejectWithValue }
    ) => {
        try {
            const { data } = await api.post(
                "objectsearch/histograms",
                searchObject
            );

            return data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const getDocuments = createAsyncThunk(
    "company/getDocumentIds",
    async (
        { searchObject },
        { rejectWithValue }
    ) => {
        try {
            const { data: docIdsData }  = await api.post("objectsearch", searchObject);

            if (! await docIdsData.items.length) throw new Error("Идентификаторы документов не найдены");

            const requestObject = {
                ids: docIdstoArrIds(docIdsData),
            };
            const { data } = await api.post("documents", requestObject);

            return data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

function docIdstoArrIds(docsIds) {
    let res = [];

    if (docsIds.items.length) {
        res = docsIds.items.map((doc) => doc.encodedId);
    }

    return res;
};

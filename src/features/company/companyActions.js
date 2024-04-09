import api from "@api/";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { docIdsToArrIds } from "@utils/DocumentsDataFormat";

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
    "company/getDocuments",
    async (
        { docIDs },
        { rejectWithValue }
    ) => {
        try {
            const requestObject = {
                ids: docIdsToArrIds(docIDs),
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

export const getDocumentIds = createAsyncThunk(
    "company/getDocumentIds",
    async (
        { searchObject },
        { dispatch, rejectWithValue }
    ) => {
        try {
            const { data: docIdsData }  = await api.post("objectsearch", searchObject);

            if (! await docIdsData.items.length) throw new Error("Идентификаторы документов не найдены");

            let splitDocIdsBy100;

            if (docIdsData.items.length >= 10) {
                splitDocIdsBy100 = docIdsData.items.reduce((acc, current, index, array) => {
                    if (index % 10 === 0) {
                      acc.push({items: array.slice(index, index + 10)});
                    }
                    return acc;
                }, []);

                for (let sliceDocIDs of splitDocIdsBy100) {
                    dispatch(getDocuments({docIDs: sliceDocIDs}));
                }
            } else {
                dispatch(getDocuments({docIDs: docIdsData}));
            }

        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);



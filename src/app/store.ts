import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@features/auth/authSlice";
import userReducer from "@features/user/userSlice";
import companyReducer from "@features/company/companySlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        company: companyReducer,
    },
});

export default store;

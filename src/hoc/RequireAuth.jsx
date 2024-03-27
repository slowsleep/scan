import {useLocation, Navigate} from "react-router-dom";
import { useAuth } from "../hook/useAuth";

export const RequireAuth = ({children}) => {
    const location = useLocation();
    const {auth} = useAuth();

    if (!auth) {
        return <Navigate to="/" state={{from: location}} />
    }

    return children;
}


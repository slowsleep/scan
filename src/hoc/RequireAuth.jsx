import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const RequireAuth = ({children}) => {
    const { isAuth, loading } = useSelector(state => state.auth);
    const [result, setResult] = useState(null);

    useEffect(() => {
        if (loading) {
            setResult("loading...");
        }
        if (!loading && !isAuth) {
            setResult(<Navigate to="/" />)
        }
        if (!loading && isAuth) {
            setResult(children)
        }
    }, [isAuth, loading, children])

    return result;
}


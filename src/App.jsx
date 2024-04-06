import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { RequireAuth } from "./hoc/RequireAuth";
import { Layout } from "./components/";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import Search from "./pages/Search/Search";
import SearchResult from "./pages/SearchResult/SearchResult";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "./features/auth/authActions";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}></Route>
        <Route path="login" element={<SignIn/>}></Route>
        <Route path="search" element={<RequireAuth><Search/></RequireAuth>}></Route>
        <Route path="search/result" element={<RequireAuth><SearchResult/></RequireAuth>}></Route>
    </Route>
));

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        let token = localStorage.getItem("token");
        if (token) {
            dispatch(checkAuth());
        }
    }, [])

    return (
        <RouterProvider router={router} />
    );
}

export default App;

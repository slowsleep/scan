import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { RequireAuth } from "./hoc/RequireAuth";
import { AuthProvider } from "./hoc/AuthProvider";
import { Layout } from "./components/";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import Search from "./pages/Search/Search";
import SearchResult from "./pages/SearchResult/SearchResult";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}></Route>
        <Route path="login" element={<SignIn/>}></Route>
        <Route path="search" element={<RequireAuth><Search/></RequireAuth>}></Route>
        <Route path="search/result" element={<RequireAuth><SearchResult/></RequireAuth>}></Route>
    </Route>
));

function App() {
    return (
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    );
}

export default App;

import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import Search from "./pages/Search/Search";
import SearchOutput from "./pages/SearchOutput/SearchOutput";

import { RequireAuth } from "./hoc/RequireAuth";
import { AuthProvider } from "./hoc/AuthProvider";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}></Route>
        <Route path="login" element={<SignIn/>}></Route>
        <Route path="search" element={<RequireAuth><Search/></RequireAuth>}></Route>
        <Route path="search-output" element={<RequireAuth><SearchOutput/></RequireAuth>}></Route>
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

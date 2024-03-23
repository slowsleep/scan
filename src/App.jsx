import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import Search from "./pages/Search/Search";
import SearchOutput from "./pages/SearchOutput/SearchOutput";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}></Route>
        <Route path="login" element={<SignIn/>}></Route>
        <Route path="search" element={<Search/>}></Route>
        <Route path="search-output" element={<SearchOutput/>}></Route>
    </Route>
));

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;

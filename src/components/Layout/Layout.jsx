import { Outlet } from "react-router-dom";
import "../../index.css";
import { Header, Footer } from "../";

const Layout = () => {
  return (
    <>
        <Header />
        <main className="main">
            <Outlet />
        </main>
        <Footer />
    </>
  )
}

export { Layout };

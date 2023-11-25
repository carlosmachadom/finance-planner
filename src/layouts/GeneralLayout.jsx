import { Outlet } from "react-router-dom";
import  Header from "@templates/Header";
import  Footer  from "@templates/Footer";

const Layout = () => {
    return (
        <div className="content-container">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout;
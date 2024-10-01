import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { useEffect } from "react";
import Nav from "../Shared/Navbar/Nav";

const Main = () => {
    return (
        <div className="bg-black">
            <Nav/>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;
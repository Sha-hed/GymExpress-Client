import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { useEffect } from "react";
import Nav from "../Shared/Navbar/Nav";
import Foot from "../Shared/Footer/Foot";

const Main = () => {
    return (
        <div className="bg-black">
            <Nav/>
            <Outlet></Outlet>
            <Foot/>
        </div>
    );
};

export default Main;
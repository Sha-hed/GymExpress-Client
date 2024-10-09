import { Outlet} from "react-router-dom";
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
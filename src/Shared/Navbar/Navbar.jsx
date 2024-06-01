import { NavLink } from "react-router-dom";
import logo from '../../../src/assets/images/Logo.png'

const Navbar = () => {

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allTrainer'>Trainer</NavLink></li>
        <li><NavLink to='/allClasses'>Classes</NavLink></li>
        <li><NavLink to='/community'>Community</NavLink></li>
    </>

    return (
        <div>
            <div className="max-w-7xl mx-auto navbar fixed z-10 bg-gray-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <div className="avatar">
                        <div className="w-12 rounded-full">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <a className="font-bold text-2xl ml-1">FitnessClub</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-secondary">Button</a>
                </div>
            </div>

        </div>
    );
};

export default Navbar;
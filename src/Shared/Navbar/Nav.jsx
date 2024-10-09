import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const navLinks = [
    {
        path: '/',
        title: 'Home'
    },
    {
        path: '/allClasses',
        title: 'Classes'
    },
    {
        path: '/allTrainer',
        title: 'Trainers'
    }
]


const Nav = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const { user } = useAuth();
    const location = useLocation();

    const handleScroll = () => {
        if (window.scrollY > 800) {
            setShowNavbar(true);
        } else {
            setShowNavbar(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div>
            <div className="absolute z-10 w-full flex justify-between md:px-32 py-5 text-white text-lx mt-3">
                <div className="w-[150px] object-cover">
                    <img src="/src/assets/images/GymLogo.png" alt="" />
                </div>
                <div className="flex space-x-10 font-bold text-xl">
                    {navLinks.map(({ path, title }, id) => (
                        <Link
                            key={id}
                            to={path}
                            className={`${location.pathname === path
                                ? "border-b-2 border-white"
                                : "relative pb-1 hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:h-[2px] hover:after:bg-white after:w-0 hover:after:w-full after:transition-all after:duration-500"
                                }`}
                        >
                            {title}
                        </Link>
                    ))}
                    {user ? (
                        <Link to='/demo'>Dashboard</Link>
                    ) : (
                        <Link to='/signin'>Login</Link>
                    )}
                </div>
            </div>
            <div className={`fixed z-10 top-0 left-0 w-full flex justify-between md:px-32 py-5 bg-black opacity-75 transition-transform duration-500 ${showNavbar ? "translate-y-0" : "-translate-y-full"} text-white text-lg`}>
                <div className="w-[150px] object-cover">
                    <img src="/src/assets/images/GymLogo.png" alt="" />
                </div>
                <div className="flex space-x-5 font-semibold text-xl">
                    {navLinks.map(({ path, title }, id) => (
                        <Link
                            key={id}
                            to={path}
                            className={`${location.pathname === path
                                ? "border-b-2 border-white"
                                : "relative pb-1 hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:h-[2px] hover:after:bg-white after:w-0 hover:after:w-full after:transition-all after:duration-500"
                                }`}
                        >
                            {title}
                        </Link>
                    ))}
                    {user ? (
                        <Link to='/demo'>Dashboard</Link>
                    ) : (
                        <Link to='/signin'>Login</Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Nav;
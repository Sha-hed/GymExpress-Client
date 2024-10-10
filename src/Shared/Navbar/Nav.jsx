import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { IoMenu } from "react-icons/io5";
import { RiCloseLargeLine } from "react-icons/ri";
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
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const [anywhere, setAnyWhere] = useState(false)

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


    const handlePatha = () => {
        setOpen(!open)
    }
    const handlePatha2 = () => {
        setAnyWhere(!anywhere)
    }



    return (
        <div>
            <div className="absolute z-10 w-full flex justify-between md:px-32 py-5 text-white text-lx">
                <div className="w-[150px] object-cover">
                    <img src="/src/assets/images/GymLogo.png" alt="" />
                </div>
                <div className="hidden md:flex space-x-10 font-bold text-xl">
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
                {/* For Responsiveness */}
                <div className="flex md:hidden">
                    {
                        !open && <button onClick={() => setOpen(!open)}><IoMenu className="bg-gray-600 p-1 text-3xl" /></button>
                    }
                </div>
                <div className={`absolute top-0 left-0 z-20 bg-black text-white w-full h-screen transition-transform duration-500 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="py-5">
                        <div className="flex justify-between">
                            <div className="w-[150px] object-cover">
                                <img src="/src/assets/images/GymLogo.png" alt="" />
                            </div>
                            {
                                open && <button onClick={() => setOpen(!open)}><RiCloseLargeLine className="bg-gray-600 p-1 text-3xl" /></button>
                            }
                        </div>
                        <hr className="my-5" />
                        <div className="flex flex-col px-5 space-y-3">
                            {navLinks.map(({ path, title }, id) => (
                                <Link
                                    onClick={handlePatha}
                                    key={id}
                                    to={path}
                                    className={`${location.pathname === path
                                        ? "border-b-2 border-white w-[50px]"
                                        : "relative pb-1 hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:h-[2px] hover:after:bg-white after:w-0 hover:after:w-full after:transition-all after:duration-500"
                                        }`}
                                >
                                    {title}
                                </Link>
                            ))}
                            {user ? (
                                <Link onClick={handlePatha} to='/demo'>Dashboard</Link>
                            ) : (
                                <Link onClick={handlePatha} to='/signin'>Login</Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:block">
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
            <div className="block md:hidden">
                <div className={`fixed z-20 top-0 left-0 w-full flex justify-between md:px-32 py-5 bg-black opacity-75 transition-transform duration-500 ${showNavbar ? "translate-y-0" : "-translate-y-full"} text-white text-lg`}>
                    <div className="w-[150px] object-cover">
                        <img src="/src/assets/images/GymLogo.png" alt="" />
                    </div>
                    {/* <div className="flex space-x-5 font-semibold text-xl">
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
                    </div> */}
                    <div className="flex md:hidden">
                        {
                            !anywhere && <button onClick={() => setAnyWhere(!anywhere)}><IoMenu className="bg-gray-600 p-1 text-3xl" /></button>
                        }
                        {/* <h1><IoMenu className="bg-gray-600 p-1 text-5xl" /></h1> */}
                    </div>
                    <div className={`absolute top-0 left-0 z-20 bg-black text-white w-full h-screen transition-transform duration-500 ${anywhere ? 'translate-x-0' : '-translate-x-full'}`}>
                        <div className="py-5">
                            <div className="flex justify-between">
                                <div className="w-[150px] object-cover">
                                    <img src="/src/assets/images/GymLogo.png" alt="" />
                                </div>
                                {
                                    anywhere && <button onClick={() => setAnyWhere(!anywhere)}><RiCloseLargeLine className="bg-blue-400 p-1 text-3xl" /></button>
                                }
                            </div>
                            <hr className="my-5" />
                            <div className="flex flex-col px-5 space-y-3">
                                {navLinks.map(({ path, title }, id) => (
                                    <Link
                                        onClick={handlePatha2}
                                        key={id}
                                        to={path}
                                        className={`${location.pathname === path
                                            ? "border-b-2 border-white w-[50px]"
                                            : "relative pb-1 hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:h-[2px] hover:after:bg-white after:w-0 hover:after:w-full after:transition-all after:duration-500"
                                            }`}
                                    >
                                        {title}
                                    </Link>
                                ))}
                                {user ? (
                                    <Link onClick={handlePatha2} to='/demo'>Dashboard</Link>
                                ) : (
                                    <Link onClick={handlePatha2} to='/signin'>Login</Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
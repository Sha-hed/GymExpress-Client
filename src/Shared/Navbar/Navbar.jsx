import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/images/Logo.png'

const Navbar = () => {
    const [isToggleOpen, setIsToggleOpen] = useState(false)
    const { user, logOut } = useAuth();
    const handleLogOut = () => {
        logOut()
            .then(result => console.log(result.user))
            .then(error => console.log(error))
    }
    return (
        <>
            {/*<!-- Component: Navbar with Topbar --> */}
            {/*<!-- Header --> */}
            <header className="border-b-1 relative z-20 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
                <div className="relative mx-auto max-w-full  lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
                    <nav
                        aria-label="main navigation"
                        className="flex py-3 items-stretch justify-between font-medium text-slate-700"
                        role="navigation"
                    >
                        {/*      <!-- Brand logo --> */}
                        <a
                            id="WindUI"
                            aria-label="WindUI logo"
                            aria-current="page"
                            className="flex items-center whitespace-nowrap text-lg focus:outline-none lg:flex-1"
                            href="javascript:void(0)"
                        >
                            <div className="w-12 rounded-full">
                                <img src={logo} alt="" />
                            </div>
                            FitnessClub
                        </a>
                        {/*      <!-- Mobile trigger --> */}
                        <button
                            className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${isToggleOpen
                                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                                    : ""
                                }
              `}
                            onClick={() => setIsToggleOpen(!isToggleOpen)}
                            aria-expanded={isToggleOpen ? "true" : "false"}
                            aria-label="Toggle navigation"
                        >
                            <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                                <span
                                    aria-hidden="true"
                                    className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                                ></span>
                                <span
                                    aria-hidden="true"
                                    className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                                ></span>
                                <span
                                    aria-hidden="true"
                                    className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                                ></span>
                            </div>
                        </button>
                        {/*      <!-- Navigation links --> */}
                        <ul
                            role="menubar"
                            aria-label="Select page"
                            className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${isToggleOpen
                                ? "visible opacity-100 backdrop-blur-sm"
                                : "invisible opacity-0"
                                }`}
                        >
                            <li role="none" className="flex items-stretch">
                                <NavLink
                                    to='/'
                                    role="menuitem"
                                    aria-current="page"
                                    aria-haspopup="false"
                                    className="flex items-center gap-2 py-4 text-emerald-500 transition-colors duration-300 hover:text-emerald-600 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                                    href="javascript:void(0)"
                                >
                                    <span>Home</span>
                                </NavLink>
                            </li>
                            <li role="none" className="flex items-stretch">
                                <NavLink
                                    to='/allTrainer'
                                    role="menuitem"
                                    aria-haspopup="false"
                                    className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                                    href="javascript:void(0)"
                                >
                                    <span>Trainer</span>
                                </NavLink>
                            </li>
                            <li role="none" className="flex items-stretch">
                                <NavLink
                                    to='/allClasses'
                                    role="menuitem"
                                    aria-haspopup="false"
                                    className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                                    href="javascript:void(0)"
                                >
                                    <span>Classes</span>
                                </NavLink>
                            </li>
                            <li role="none" className="flex items-stretch">
                                <NavLink
                                    to='/community'
                                    role="menuitem"
                                    aria-haspopup="false"
                                    className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                                    href="javascript:void(0)"
                                >
                                    <span>Community</span>
                                </NavLink>
                            </li>
                            {
                                user && (
                                    <li role="none" className="flex items-stretch">
                                        <NavLink
                                            to='/demo'
                                            role="menuitem"
                                            aria-haspopup="false"
                                            className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                                            href="javascript:void(0)"
                                        >
                                            <span>Dashboard</span>
                                        </NavLink>
                                    </li>
                                )
                            }
                        </ul>
                        {/*      <!-- Actions --> */}
                        <div className="ml-auto flex items-center justify-end px-6 lg:ml-0 lg:flex-1 lg:p-0">
                            {
                                user ?
                                    <>
                                        <div className="w-14 border-2  p-1 rounded-full mr-2">
                                            <img src={user?.photoURL} className="rounded-full" alt="" />
                                        </div>
                                        <button onClick={handleLogOut} type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">LogOut</button>
                                    </> :
                                    <Link to='/login' type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</Link>
                            }
                        </div>
                    </nav>
                </div>
            </header>
            {/*<!-- End Navbar with Topbar--> */}
        </>
    )
}

export default Navbar;
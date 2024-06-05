import { FaAd, FaBalanceScale, FaCalendar, FaComment, FaHome, FaList, FaNewspaper, FaShoppingCart, FaSubscript, FaTrailer, FaTrain, FaUser, FaUtensilSpoon } from "react-icons/fa";
import { FaClapperboard, FaEarthAmericas } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const Demo = () => {
    const isAdmin = true
    const { user } = useAuth();
    return (
        <div className="flex text-white">
            <div className="w-64 min-h-screen bg-[#374587]">
                <ul>
                    <div className="flex flex-col justify-center items-center mt-10">
                        <div className="w-20 rounded-full">
                            <img className="rounded-full border-4 p-1" src={user?.photoURL} alt="" />
                        </div>
                        <h1 className="uppercase text-2xl font-semibold ">{user?.displayName}</h1>
                        <h1>{user?.email}</h1>
                        <div className="w-full mx-auto my-3 border"></div>
                    </div>
                    {/* Admin Part */}
                    {
                        isAdmin ? <>
                            <div className="flex items-center gap-2 m-3">
                                <FaEarthAmericas className="text-xl" />
                                <li><NavLink to='/demo/news'>NewsLetter Subscriber</NavLink></li>
                            </div>
                            <div className="flex items-center gap-2 mx-3 mb-3">
                                <FaTrain className="text-xl" />
                                <li><NavLink to='/demo/allT'>All Trainer</NavLink></li>
                            </div>
                            <div className="flex items-center gap-2 mx-3 mb-3">
                                <FaTrailer className="text-xl" />
                                <li><NavLink to='/demo/at'>Applied Trainer</NavLink></li>
                            </div>
                            <div className="flex items-center gap-2 mx-3 mb-3">
                                <FaBalanceScale className="text-xl" />
                                <li><NavLink to='/demo/users'>Balance</NavLink></li>
                            </div>
                            <div className="flex items-center gap-2 mx-3 mb-3">
                                <FaNewspaper className="text-xl" />
                                <li><NavLink to='/demo/class'>Add New Class</NavLink></li>
                            </div>
                            <div className="w-full mx-auto my-3 border divide-dotted"></div>

                        </> : <>

                            <li><NavLink to='/dashboard/userHome'><FaHome />User Home</NavLink></li>
                            <li><NavLink to='/dashboard/History'><FaCalendar />Payment History</NavLink></li>
                            <li><NavLink to='/dashboard/cart'><FaShoppingCart /></NavLink></li>
                            <li><NavLink to='/dashboard/review'><FaAd />Add a Review</NavLink></li>
                            <li><NavLink to='/dashboard/paymentHistory'><FaList />Payment Real History</NavLink></li>
                        </>
                    }

                    <div className="divider divider-neutral"></div>
                    {/* Common Part  */}
                    <div className="flex items-center gap-2 m-3">
                        <FaHome className="text-xl" />
                        <li><NavLink to='/'>Home</NavLink></li>
                    </div>
                    <div className="flex items-center gap-2 mx-3 mb-3">
                        <FaTrain className="text-xl" />
                        <li><NavLink to='/allTrainer/'>Trainer</NavLink></li>
                    </div>
                    <div className="flex items-center gap-2 mx-3 mb-3">
                        <FaClapperboard className="text-xl" />
                        <li><NavLink to='/allClasses'>Classes</NavLink></li>
                    </div>
                    <div className="flex items-center gap-2 mx-3 mb-3">
                        <FaComment className="text-xl" />
                        <li><NavLink to='/community'>Community</NavLink></li>
                    </div>
                </ul>
            </div>
            <div className="flex-1 p-8 bg-gray-200 text-black">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Demo;
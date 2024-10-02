import { FaBalanceScale, FaComment, FaForumbee, FaHome, FaNewspaper, FaRegComment, FaSplotch, FaTrailer, FaTrain } from "react-icons/fa";
import { FaClapperboard, FaEarthAmericas, FaPersonRifle } from "react-icons/fa6";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";
import useTrainer from "../Hooks/useTrainer";
import { RiLogoutBoxFill } from "react-icons/ri";
import toast from "react-hot-toast";


const Demo = () => {
    const { user, logOut } = useAuth();
    const [isAdmin] = useAdmin();
    const [isTrainer] = useTrainer();
    const navigate = useNavigate()

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Logged Out Successfully!')
                navigate('/')
            })
            .catch((error) => toast.error(error.message))
    }

    return (
        <div className="bg-[#1E1E1E]">
            <div className="max-w-7xl mx-auto flex text-white relative">
                <div className="w-64 min-h-screen bg-[#333333]">
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
                                    <li><NavLink to='/demo/allTrainer'>All Trainer</NavLink></li>
                                </div>
                                <div className="flex items-center gap-2 mx-3 mb-3">
                                    <FaTrailer className="text-xl" />
                                    <li><NavLink to='/demo/appliedTrainer'>Applied Trainer</NavLink></li>
                                </div>
                                <div className="flex items-center gap-2 mx-3 mb-3">
                                    <FaBalanceScale className="text-xl" />
                                    <li><NavLink to='/demo/balance'>Balance</NavLink></li>
                                </div>
                                <div className="flex items-center gap-2 mx-3 mb-3">
                                    <FaNewspaper className="text-xl" />
                                    <li><NavLink to='/demo/class'>Add New Class</NavLink></li>
                                </div>
                                <div className="flex items-center gap-2 mx-3 mb-3">
                                    <FaForumbee className="text-xl" />
                                    <li><NavLink to='/demo/forum'>Add New Forum</NavLink></li>
                                </div>
                                <div className="w-full mx-auto my-3 border divide-dotted"></div>

                            </> : isTrainer ? <>
                                <div className="flex items-center gap-2 m-3">
                                    <FaSplotch className="text-xl" />
                                    <li><NavLink to='/demo/ms'>Manage Slot</NavLink></li>
                                </div>
                                <div className="flex items-center gap-2 mx-3 mb-3">
                                    <FaSplotch className="text-xl" />
                                    <li><NavLink to='/demo/ans'>Add New Slot</NavLink></li>
                                </div>
                                <div className="flex items-center gap-2 mx-3 mb-3">
                                    <FaForumbee className="text-xl" />
                                    <li><NavLink to='/demo/forum'>Add New Forum</NavLink></li>
                                </div>
                                <div className="w-full mx-auto my-3 border divide-dotted"></div>
                            </> : <>
                                <div className="flex items-center gap-2 m-3">
                                    <FaHome className="text-xl" />
                                    <li><NavLink to='/demo/activity'>Activity Log</NavLink></li>
                                </div>
                                <div className="flex items-center gap-2 mx-3 mb-3">
                                    <FaPersonRifle className="text-xl" />
                                    <li><NavLink to='/demo/profile'>Profile</NavLink></li>
                                </div>
                                <div className="flex items-center gap-2 mx-3 mb-3">
                                    <FaRegComment className="text-xl" />
                                    <li><NavLink to='/demo/recommended'>Booked Trainer</NavLink></li>
                                </div>
                                <div className="w-full mx-auto my-3 border divide-dotted"></div>
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
                            <li><NavLink to='/allTrainer'>Trainer</NavLink></li>
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
                    <div className="absolute bottom-10 left-16 flex justify-center items-center gap-2">
                        <RiLogoutBoxFill className="text-white text-xl" />
                        <button onClick={handleLogOut} className="text-lg font-semibold hover:underline">LogOut</button>
                    </div>
                </div>
                <div className="flex-1 p-8 bg-gray-200 text-black">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>

    );
};

export default Demo;
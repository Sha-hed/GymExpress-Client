import { FaBalanceScale, FaComment, FaForumbee, FaHome, FaNewspaper, FaRegComment, FaSplotch, FaTrailer, FaTrain } from "react-icons/fa";
import { FaClapperboard, FaEarthAmericas, FaPersonRifle } from "react-icons/fa6";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { MdOutlineRateReview } from "react-icons/md";
import { IoPersonAdd } from "react-icons/io5";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdAddComment } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import { RiLogoutBoxFill } from "react-icons/ri";
import { FaUsersGear } from "react-icons/fa6";
import toast from "react-hot-toast";
import IsAdmin from "../Hooks/IsAdmin";
import IsTrainer from "../Hooks/IsTrainer";
import { CgProfile } from "react-icons/cg";
import { MdManageAccounts } from "react-icons/md";
import { MdAddToPhotos } from "react-icons/md";
import { FaUserShield } from "react-icons/fa";
import { TbGymnastics } from "react-icons/tb";
import { FaBookReader } from "react-icons/fa";
import { MdLibraryAddCheck } from "react-icons/md";
const Demo = () => {
    const { user, logOut } = useAuth();
    // const [isAdmin] = useAdmin();
    const [isAdmin] = IsAdmin();
    const [isTrainer] = IsTrainer();
    const navigate = useNavigate()
    console.log('Trainer Checking Man ', isTrainer)
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
                <div className="w-[300px] min-h-screen bg-[#333333]">
                    <ul>
                        <div className="flex flex-col justify-center items-center mt-10">
                            <div className="w-20 rounded-full">
                                <img className="rounded-full border-4 p-1" src={user?.photoURL} alt="" />
                            </div>
                            <h1 className="uppercase text-2xl font-semibold ">{user?.displayName}</h1>
                            <h1 className="border border-white py-1 px-3">Overview</h1>
                            {/* <h1>{user?.email}</h1> */}
                            <div className="w-full mx-auto my-3 border"></div>
                        </div>
                        {/* Admin Part */}
                        {
                            isAdmin ? <>
                                <div className="flex items-center gap-2 mx-3 mb-3">
                                    <FaUsersGear className="text-xl" />
                                    <li><NavLink to='/demo/allTrainer'>All Trainer</NavLink></li>
                                </div>
                                <div className="flex items-center gap-2 mx-3 mb-3">
                                    <IoPersonAdd className="text-xl" />
                                    <li><NavLink to='/demo/appliedTrainer'>Applied Trainer</NavLink></li>
                                </div>
                                {/* <div className="flex items-center gap-2 mx-3 mb-3">
                                    <FaBalanceScale className="text-xl" />
                                    <li><NavLink to='/demo/balance'>Balance</NavLink></li>
                                    </div> */}
                                <div className="flex items-center gap-2 mx-3 mb-3">
                                    <MdAddToPhotos className="text-xl" />
                                    <li><NavLink to='/demo/class'>Add New Class</NavLink></li>
                                </div>
                                <div className="flex items-center gap-2 mx-3 mb-3">
                                    <MdLibraryAddCheck className="text-xl" />
                                    <li><NavLink to='/demo/addNewBlog'>Add New Blog</NavLink></li>
                                </div>
                                <div className="flex items-center gap-2 m-3">
                                    <IoNewspaperOutline className="text-xl" />
                                    <li><NavLink to='/demo/news'>NewsLetter Subscriber</NavLink></li>
                                </div>
                                <div className="w-full mx-auto my-3 border divide-dotted"></div>

                            </> : isTrainer ? <>
                                <div className="flex items-center gap-2 mx-3 mb-3">
                                    <CgProfile className="text-xl" />
                                    <li><NavLink to='/demo/myProfile'>Profile</NavLink></li>
                                </div>
                                <div className="flex items-center gap-2 m-3">
                                    <MdManageAccounts className="text-xl" />
                                    <li><NavLink to='/demo/manageClasses'>Manage Classes</NavLink></li>
                                </div>
                                <div className="flex items-center gap-2 mx-3 mb-3">
                                    <MdAddToPhotos className="text-xl" />
                                    <li><NavLink to='/demo/addNewBlog'>Add New Blog</NavLink></li>
                                </div>
                                <div className="flex items-center gap-2 mx-3 mb-3">
                                    <MdOutlineRateReview className="text-xl" />
                                    <li><NavLink to='/demo/addReview'>Add Review</NavLink></li>
                                </div>
                                <div className="w-full mx-auto my-3 border divide-dotted"></div>
                            </> : <>
                                {/* <div className="flex items-center gap-2 m-3">
                                    <FaHome className="text-xl" />
                                    <li><NavLink to='/demo/activity'>Activity Log</NavLink></li>
                                </div> */}
                                <div className="flex items-center gap-2 mx-3 mb-3">
                                    <CgProfile className="text-xl" />
                                    <li><NavLink to='/demo/profile'>Profile</NavLink></li>
                                </div>
                                <div className="flex items-center gap-2 mx-3 mb-3">
                                    <FaAddressBook className="text-xl" />
                                    <li><NavLink to='/demo/recommended'>My Classes</NavLink></li>
                                </div>
                                <div className="flex items-center gap-2 mx-3 mb-3">
                                    <MdOutlineRateReview className="text-xl" />
                                    <li><NavLink to='/demo/addReview'>Add Review</NavLink></li>
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
                            <FaUserShield className="text-xl" />
                            <li><NavLink to='/allTrainer'>Trainers</NavLink></li>
                        </div>
                        <div className="flex items-center gap-2 mx-3 mb-3">
                            <TbGymnastics className="text-xl" />
                            <li><NavLink to='/allClasses'>Classes</NavLink></li>
                        </div>
                        {/* <div className="flex items-center gap-2 mx-3 mb-3">
                            <FaBookReader className="text-xl" />
                            <li><NavLink to='/blogs'>Blog</NavLink></li>
                        </div> */}
                    </ul>
                    <div className="absolute bottom-10 left-16 flex justify-center items-center gap-2">
                        <RiLogoutBoxFill className="text-white text-xl" />
                        <button onClick={handleLogOut} className="text-lg font-semibold hover:underline">LogOut</button>
                    </div>
                </div>
                <div className="w-[1000px] p-8 bg-gray-200 text-black">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>

    );
};

export default Demo;
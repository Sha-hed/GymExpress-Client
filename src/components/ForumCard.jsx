
import { Link, useLocation } from 'react-router-dom';
import moderator from '../assets/images/man.png';
import admin from '../assets/images/profile.png';
import { FaLandMineOn } from 'react-icons/fa6';
import { MdAdminPanelSettings } from "react-icons/md";
import { MdOutlineAddModerator } from "react-icons/md";
const ForumCard = ({ forum }) => {
    const { _id, title, description, email } = forum;
    const location = useLocation();
    return (
        <div className='flex justify-evenly gap-5 p-5 border bg-gray-200 shadow-xl rounded-xl'>
            <div className='w-32'>
                {
                    email === 'admin@gmail.com' ?
                        <>
                            <img src={admin} alt="" />
                            <h1 className='flex justify-center items-center text-xl gap-2 text-green-700'><MdOutlineAddModerator ></MdOutlineAddModerator> Admin</h1>
                        </> :
                        <>
                            <img src={moderator} alt="" />
                            <h1 className='flex justify-center items-center text-xl gap-2 text-green-700'><MdAdminPanelSettings></MdAdminPanelSettings> Moderator</h1>
                        </>
                }

            </div>
            <div className='w-[500px]'>
                <h1 className='text-xl font-bold my-3'>{title}</h1>
                <h1>
                    {description.length > 200 ? (
                        <p>
                            {`${description.slice(0, 200)}...`}
                            <Link state={{from:location.pathname}} to={`/forumDetails/${_id}`}><a className='text-red-400'>Read More</a></Link>
                        </p>
                    ) : (
                        description
                    )}
                </h1>
            </div>
        </div>
    );
};

export default ForumCard;
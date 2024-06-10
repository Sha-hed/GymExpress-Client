import { useLoaderData } from "react-router-dom";
import moderator from '../../assets/images/man.png';
import admin from '../../assets/images/profile.png';
import { MdAdminPanelSettings, MdOutlineAddModerator } from "react-icons/md";
import { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiTwotoneDislike } from "react-icons/ai";

const ForumDetails = () => {
    const forum = useLoaderData();
    const { email, title, description } = forum;
    const [like, setLike] = useState(false);
    const [disLike, setDisLike] = useState(false);
    const handleLike = () => {
        setLike(true)
        setDisLike(false)
    }
    const handleDislike = () => {
        setLike(false)
        setDisLike(true)
    }
    return (
        <div className='flex justify-evenly gap-5 p-5 border bg-gray-200 shadow-xl rounded-xl my-10'>
            <div className='w-32'>
                {
                    email === 'admin@gmail.com' ?
                        <div>
                            <img src={admin} alt="" />
                            <h1 className='flex justify-center items-center text-xl gap-2 text-green-700'><MdOutlineAddModerator ></MdOutlineAddModerator> Admin</h1>
                        </div> :
                        <>
                            <img src={moderator} alt="" />
                            <h1 className='flex justify-center items-center text-xl gap-2 text-green-700'><MdAdminPanelSettings></MdAdminPanelSettings> Moderator</h1>
                        </>
                }
                <div className="flex gap-5 my-10">
                    <button onClick={handleLike} className={`flex flex-col justify-center items-center ${like ? 'p-2 bg-red-400 rounded-full' : ''}`}>
                        <AiOutlineLike className={`text-2xl font-medium`} />
                        <h1>Like</h1>
                    </button>
                    <button className={`flex flex-col justify-center items-center ${disLike ? 'p-2 bg-red-400 rounded-full' : ''}`} onClick={handleDislike}>
                        <AiTwotoneDislike className="text-2xl font-medium" />
                        <h1>DisLike</h1>
                    </button>

                </div>
            </div>
            <div className='w-[500px]'>
                <h1 className='text-xl font-bold my-3'>{title}</h1>
                <h1>{description}</h1>
            </div>
        </div>
    );
};

export default ForumDetails;
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";


const TrainerCard = ({ trainer }) => {
    return (
        <div>
            <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
                <div className="flex space-x-4 justify-center items-center">
                    <div className="flex flex-col space-y-1">
                        <h1 rel="noopener noreferrer" href="#" className="font-semibold text-center">{trainer?.name}</h1>
                    </div>
                </div>
                <div>
                    <img src={trainer?.photo} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                    <h2 className="mb-1 text-xl font-semibold">{trainer?.experience} Years Experience</h2>
                    <p className="text-sm dark:text-gray-600 flex items-center justify-between gap-2">
                        <h1>Available in : </h1>
                        {
                            trainer?.days.map((day, idx) => <a
                                className="p-1 bg-purple-300 text-white rounded-xl"
                                key={idx}>#{day}</a>)
                        }</p>
                    <p className="text-sm dark:text-gray-600 flex items-center justify-between gap-2 my-2">
                        <h1>Skilled in : </h1>
                        {
                            trainer?.selectedSkill.map((day, idx) => <a
                                className="p-1 bg-purple-300 text-white rounded-xl"
                                key={idx}>#{day}</a>)
                        }</p>
                    <div className="flex items-center">
                        <h1 className="mr-5">Find On : </h1>
                        <div className="flex justify-around gap-5 mr-5">
                            <a><FaFacebook className="text-2xl"></FaFacebook></a>
                            <a><FaInstagram className="text-2xl"></FaInstagram></a>
                            <a><FaTwitter className="text-2xl"></FaTwitter></a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center items-center">
                    <Link  to={`/details/${trainer?._id}`} className="flex justify-center items-center gap-3 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Know More</Link>
                </div>
            </div>
        </div >
    );
};

export default TrainerCard;
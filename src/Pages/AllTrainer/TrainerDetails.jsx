
import { Link, useLoaderData, useLocation } from "react-router-dom";
import './trainer.css'

const TrainerDetails = () => {
    const trainer = useLoaderData();
    const { days } = trainer;
    const location = useLocation();
    const classes = location?.state?.name || 'A'
    return (
        <div>
            {/* Trainer Information */}
            <h1 className="text-4xl underline uppercase text-center font-bold my-10">{trainer?.name} Details</h1>
            <div className="flex justify-around items-center my-10">
                <div className="flex flex-col max-w-lg space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
                    <div>
                        <img src={trainer?.photo} alt="" className="object-cover w-full h-60 sm:h-96 dark:bg-gray-500" />
                    </div>
                </div>
                <div className="w-1/2 dark:bg-gray-50 dark:text-gray-800">
                    <h1 className="mb-1 text-xl font-semibold">Name : {trainer?.name}</h1>
                    <h1 className="mb-1 text-xl font-semibold">Age : {trainer?.age}</h1>
                    <h2 className="mb-1 text-xl font-semibold">{trainer?.experience} Years Experience</h2>
                    <p className="text-sm dark:text-gray-600 gap-2 my-2">
                        <h1 className="mb-1 text-xl font-semibold">Skilled in : </h1>
                        {
                            trainer?.selectedSkill.map((day, idx) => <a
                                className="block p-3 w-1/2 m-1 bg-purple-300 text-white rounded-xl"
                                key={idx}>#{day}</a>)
                        }</p>

                </div>
            </div>
            <div>
                <h1 className="text-3xl font-bold uppercase underline">Available Slot :</h1>
                <div className="flex gap-3 justify-around my-10">
                    {
                        days?.map((day, idx) => <Link to={`/trainerBookedPage/${trainer?._id}`}
                            state={{from: location.pathname, day, classes}} className="bg-purple-300 p-3 rounded-xl" key={idx}>
                            Time: {trainer?.time} <br />Day: {day}
                        </Link>)
                    }
                </div>
            </div>
            <h1 className="text-3xl font-bold uppercase underline my-10">Be A Trainer!</h1>
            <div className="trainer w-3/4 h-[500px] bg-no-repeat bg-cover mx-auto flex flex-col items-center space-y-6 text-white font-bold text-xl rounded-xl">
                <h1 className="mt-32">Want to become a GYM Trainer?</h1>
                <h1>Apply For the GYM trainer here!</h1>
                <Link to='/becomeGymTrainer' className="flex justify-center items-center gap-3 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Become a Trainer</Link>
            </div>
        </div>
    );
};

export default TrainerDetails;

// <p className="text-sm dark:text-gray-600 flex items-center justify-between gap-2">
// <h1>Available in : </h1>
// {
//     trainer?.days.map((day, idx) => <a
//         className="p-1 bg-purple-300 text-white rounded-xl"
//         key={idx}>#{day}</a>)
// }</p>
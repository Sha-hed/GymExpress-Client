
import { Link } from "react-router-dom";


const TrainerCard = ({ trainer }) => {
    const {_id, name, age, experience, photo, selectedSkills } = trainer
    return (
        <div className="text-white hover:scale-105 duration-100">
            <div className="max-w-[350px] space-y-4 rounded-lg bg-white p-6 shadow-lg md:w-[350px] dark:bg-[#18181B]">
                <img width={400} height={400} className="h-[275px] w-[350px] rounded-lg object-cover" src={photo} alt="card navigate ui" />
                <div className="h-[150px] space-y-1">
                    <div className="flex justify-between">
                        <h1 className="text-lg font-semibold ">{name}</h1>
                        <h1>{age}yrs</h1>
                    </div>
                    <h1>{experience} years of experience</h1>
                    <p className="">Specialized in :</p>
                    <div>
                        {
                            selectedSkills?.map((skill, id) => <p className="text-green-700 font-semibold" key={id}>#{skill}</p>)
                        }
                    </div>
                    {/* <p className="text-sm text-gray-500 dark:text-white/60">This is a brief description of the product. It highlights the key features and benefits.</p> */}
                    {/* <div className="text-lg font-semibold">$99.99</div> */}
                </div>
                <div className="flex gap-4 justify-center">
                    {/* <button className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base ">Add to Cart</button> */}
                    <Link to={`/getTrainer/${_id}`} className="rounded-md border border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white  py-2  duration-300 hover:bg-gray-200">View Details</Link>
                </div>
            </div>

        </div>
    );
};

export default TrainerCard;
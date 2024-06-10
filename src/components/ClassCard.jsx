import { Link, useLocation } from "react-router-dom";
import Man from '../assets/images/man.png';
const ClassCard = ({ cc }) => {
    const location = useLocation()
    const { name, trainerEmail } = cc;
    return (
        <div className="max-w-sm rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
            <img src={cc?.photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between space-y-8">
                <div className="space-y-2 my-3 px-3">
                    <p className="dark:text-gray-800 text-xl font-bold">{cc?.name}</p>
                    <p className="dark:text-gray-800 ">{cc?.des}</p>
                    <h1 className=" text-xl font-bold">Trainer Who took this Class</h1>
                    <div className="flex-1 flex items-center justify-around">
                        {
                             trainerEmail?.map((email,id)=>
                            <Link to={`/details/${email}`} state={{ from:location.pathname, name}} key={id}>
                                <img className="w-12" src={Man} alt="" />
                                </Link>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;
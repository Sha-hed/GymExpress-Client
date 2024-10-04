import { Link } from "react-router-dom";
const ClassCard = ({ cc }) => {
    const { category, description, photoURL } = cc;
    return (
        <div>
            <div className="hover:scale-105 flex flex-col max-w-[350px] space-y-4 rounded-lg bg-white p-6 shadow-lg md:w-[350px] dark:bg-[#18181B]">
                <img width={400} height={400} className="h-[275px] w-[350px] rounded-lg object-cover" src={photoURL} alt="card navigate ui" />
                <div className="grid gap-2 flex-auto">
                    <h1 className="font-semibold underline">{category}</h1>
                    <p className="text-sm text-gray-500 dark:text-white/60">{ description.length > 100 ? <> {description.slice(0,90)} <Link to={`/getSingleClass/${cc._id}`} className="btn btn-link text-red-400 hover:underline"> Read More</Link> </> : description }</p>
                    {/* <div className="text-lg font-semibold">$99.99</div> */}
                </div>
                <div className="flex gap-4 justify-center">
                    {/* <button className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base ">View Details</button> */}
                    <Link to={`/getSingleClass/${cc._id}`} className="rounded-md border border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white  py-2  duration-300 hover:bg-gray-200">View Details</Link>
                </div>
            </div>
        </div>
        // <div className="max-w-sm rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
        //     <img src={cc?.photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
        //     <div className="flex flex-col justify-between space-y-8">
        //         <div className="space-y-2 my-3 px-3">
        //             <p className="dark:text-gray-800 text-xl font-bold">{cc?.name}</p>
        //             <p className="dark:text-gray-800 ">{cc?.des}</p>
        //             <h1 className=" text-xl font-bold">Trainer Who took this Class</h1>
        //             <div className="flex-1 flex items-center justify-around">
        //                 {
        //                      trainerEmail?.map((email,id)=>
        //                     <Link to={`/details/${email}`} state={{ from:location.pathname, name}} key={id}>
        //                         <img className="w-12" src={Man} alt="" />
        //                         </Link>
        //                     )
        //                 }
        //             </div>
        //         </div>
        //     </div>
        // </div>

    );
};

export default ClassCard;
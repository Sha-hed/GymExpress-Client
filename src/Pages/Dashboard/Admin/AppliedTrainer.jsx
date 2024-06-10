import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaEye } from "react-icons/fa";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";


const AppliedTrainer = () => {
    const { loading } = useAuth();

    const axiosSecure = useAxiosSecure();


    const [mod, setMod] = useState(false);
    const [reject, setReject] = useState(false);
    const [selectedTrainer, setSelectedTrainer] = useState(null);
    const [appliedTrainer, setAppliedTrainer] = useState([])

    // const { refetch, data: appliedTrainer = [] } = useQuery({
    //     queryKey: ['trainer'],
    //     enabled: !loading,
    //     queryFn: async () => {
    //         const { data } = await axiosSecure.get('/appliedTrainer')
    //         console.log(data);
    //         return data;
    //     }
    // })
    useEffect(() => {
        fetch(' https://assignment-12-mu.vercel.app/appliedTrainer')
            .then(res => res.json())
            .then(data => setAppliedTrainer(data));
    }, [])


    const handleTrainerConfirm = async () => {
        const { data } = await axiosSecure.post('/add-trainer', selectedTrainer)
        if (data.insertInfo.insertedId) {
            Swal.fire({
                position: "top",
                icon: "success",
                title: "Trainer role accepted!",
                showConfirmButton: false,
                timer: 1500
            });
            const remainingTrainer = appliedTrainer.filter(ap => ap._id !== selectedTrainer._id)
            setAppliedTrainer(remainingTrainer);
            setMod(!mod)
            setSelectedTrainer('');
        }
    }
    const handleTrainerReject = () => {
        setMod(!mod);
        setReject(!reject)
    }

    const handleConfirm = item => {
        setSelectedTrainer(item);
        setMod(!mod);
    }
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const feedback = e.target.feedback.value;
        selectedTrainer.feedback = feedback
        selectedTrainer.status = 'rejected'
        const { data } = await axiosSecure.post('/rejectTrainer', selectedTrainer)
        if (data.addToReject.insertedId) {
            Swal.fire({
                position: "top",
                icon: "success",
                title: "Trainer Application Rejected",
                showConfirmButton: false,
                timer: 1500
            });
            const remainingTrainer = appliedTrainer.filter(ap => ap._id !== selectedTrainer._id)
            setAppliedTrainer(remainingTrainer);
            // refetch();
            setReject(!reject)
            setSelectedTrainer('');
        }
        console.log(data);
    }
    return (
        <div>
            {
                mod && (
                    <div className="absolute z-10 top-1/4 left-1/3 w-[500px] h-[350px] bg-gray-100 shadow-2xl ">
                        {
                            selectedTrainer && <div className="p-5 rounded-2xl">
                                <h1 className="text-xl font-semibold underline text-center mb-5">Trainer Information</h1>
                                <div className="flex flex-col space-y-3">
                                    <div className="w-14 rounded-full">
                                        <img className="rounded-full" src={selectedTrainer?.photo} alt="" />
                                    </div>
                                    <h1>Name : {selectedTrainer.name}</h1>
                                    <h1>Email : {selectedTrainer.email}</h1>
                                    <h1>Age : {selectedTrainer.age}</h1>
                                    <h1>Experience : {selectedTrainer.experience} Years</h1>
                                    <div className="flex justify-evenly">
                                        <button onClick={handleTrainerConfirm} type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Confirm</button>
                                        <button onClick={handleTrainerReject} type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Reject</button>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                )
            }
            {
                reject && (
                    <div className="absolute z-10 top-1/4 left-1/3 w-[500px] h-[400px] bg-gray-100 shadow-2xl ">
                        {
                            selectedTrainer && <div className="p-5 rounded-2xl">
                                <h1 className="text-xl font-semibold underline text-center mb-5">Give Feedback</h1>
                                <div className="flex flex-col space-y-3">
                                    <div className="w-14 rounded-full">
                                        <img className="rounded-full" src={selectedTrainer?.photo} alt="" />
                                    </div>
                                    <h1>Name : {selectedTrainer.name}</h1>
                                    <h1>Email : {selectedTrainer.email}</h1>
                                    <form onSubmit={handleFormSubmit}>
                                        <label className="font-semibold text-xl underline">Give Feedback</label> <br />
                                        <textarea className="w-full p-2 border my-2" placeholder="write some feedback" rows={5} name="feedback" id=""></textarea>
                                        <div className="flex justify-center items-center">
                                            <input type="submit" value="Submit" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        }
                    </div>
                )
            }
            <div className={`w-full overflow-x-auto my-10 ${mod || reject ? 'opacity-30' : ''}`}>
                <h1 className="text-center font-bold underline text-2xl mb-5">Applied Trainer</h1>
                <table className="w-full text-left border border-collapse rounded sm:border-separate border-slate-200">
                    <tbody className="text-center">
                        <tr>
                            <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">#</th>
                            <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Name</th>
                            <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Image</th>
                            <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Age</th>
                            <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Experience</th>
                            <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Action</th>
                        </tr>
                        {
                            appliedTrainer?.map((train, idx) => <tr key={train._id}>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{idx + 1}</td>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{train?.name}</td>
                                <td>
                                    <div className="w-14 rounded-full">
                                        <img className="rounded-full" src={train?.photo} alt="" />
                                    </div>
                                </td>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{train?.age}</td>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{train?.experience}</td>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                                    <FaEye onClick={() => handleConfirm(train)} className="text-xl text-red-600">
                                    </FaEye>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AppliedTrainer;
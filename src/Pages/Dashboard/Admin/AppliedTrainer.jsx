import { useQuery } from "@tanstack/react-query";
import { FaEye } from "react-icons/fa";
import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";


const AppliedTrainer = () => {
    const axiosPrivate = useAxiosPrivate()


    const [mod, setMod] = useState(false);
    const [selectedTrainer, setSelectedTrainer] = useState(null);
    // const [appliedTrainer, setAppliedTrainer] = useState([])

    const { data: appliedTrainers = [], refetch } = useQuery({
        queryKey: ['applied'],
        queryFn: async () => {
            const { data } = await axiosPrivate.get('/appliedTrainer')
            return data;
        }
    })
    console.log('Applied Trainer ', appliedTrainers)
    // useEffect(() => {
    //     fetch('/appliedTrainer')
    //         .then(res => res.json())
    //         .then(data => setAppliedTrainer(data));
    // }, [])


    const handleTrainerConfirm = async () => {
        const { data } = await axiosPrivate.post('/addTrainer', selectedTrainer)
        console.log(data)
        if (data.insertedInfo.insertedId) {
            Swal.fire({
                position: "top",
                icon: "success",
                title: "Trainer role accepted!",
                showConfirmButton: false,
                timer: 1500
            });
            refetch();
            setMod(!mod)
            setSelectedTrainer('');
        }
    }
    const handleTrainerReject = async () => {
        const { data } = await axiosPrivate.delete(`/appliedTrainer/${selectedTrainer._id}`)
        console.log(data)
        if (data.deletedCount) {
            Swal.fire({
                position: "top",
                icon: "success",
                title: "Application Rejected",
                showConfirmButton: false,
                timer: 1500
            });
            refetch()
            setMod(!mod);
            selectedTrainer('')
        }  
    }

    const handleConfirm = item => {
        setSelectedTrainer(item);
        setMod(!mod);
    }
    const handleClose = () => {
        setSelectedTrainer('');
        setMod(!mod);
    }
    return (
        <div>
            {
                mod && (
                    <div className="md:absolute z-10 md:top-1/4 md:left-1/3 w-full md:w-[550px] h-[400px] md:h-[350px] bg-gray-100 shadow-2xl ">
                        {
                            selectedTrainer && <div className="p-5 rounded-2xl">
                                <div className="flex justify-between">
                                    <h1 className="text-xl font-semibold underline text-center mb-5">Trainer Information</h1>
                                    <button onClick={handleClose} className="bg-red-600 px-3 text-white">X</button>
                                </div>
                                <div className="flex flex-col space-y-3">
                                    <div className="w-14 rounded-full">
                                        <img className="rounded-full" src={selectedTrainer?.photo} alt="" />
                                    </div>
                                    <h1>Name : {selectedTrainer.name}</h1>
                                    <h1>Email : {selectedTrainer.email}</h1>
                                    <h1>Age : {selectedTrainer.age}</h1>
                                    <h1>Experience : {selectedTrainer.experience} Years</h1>
                                    <div className="flex flex-col md:flex-row justify-evenly">
                                        <button onClick={handleTrainerConfirm} type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Confirm</button>
                                        <button onClick={handleTrainerReject} type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Reject</button>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                )
            }
            <div>
                <h1 className="text-center font-bold underline text-2xl">Applied Trainer</h1>
                <div className={`w-full overflow-x-auto my-10 ${mod ? 'opacity-30' : ''}`}>
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
                                appliedTrainers?.map((train, idx) => <tr key={train._id}>
                                    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{idx + 1}</td>
                                    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{train?.name}</td>
                                    <td>
                                        <div className="flex justify-center items-center">
                                            <img className="w-14" src={train?.photo} alt="" />
                                        </div>
                                    </td>
                                    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{train?.age}</td>
                                    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{train?.experience}</td>
                                    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 flex justify-center items-center">
                                        <FaEye onClick={() => handleConfirm(train)} className="text-xl text-red-600">
                                        </FaEye>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AppliedTrainer;
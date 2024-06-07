import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";

const AllTrainers = () => {
    const { loading } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { refetch, data: trainers = [] } = useQuery({
        queryKey: ['trainer'],
        enabled: !loading,
        queryFn: async () => {
            const { data } = await axiosSecure.get('/get-trainer')
            return data;
        }
    })
    console.log(trainers);

    const handleDelete = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const { data } = await axiosSecure.patch(`/updateTrainer`, item)
                if (data.modifiedCount) {
                    const { data: a } = await axiosSecure.delete(`/del-trainer/${item._id}`);
                    if (a.deletedCount) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Trainer has been deleted.",
                            icon: "success"
                        });
                        refetch();
                    }
                }
            }
        });
    }

    return (
        <div>
            <h1 className="text-center font-bold underline text-2xl">All Trainers</h1>
            <div className={`w-full overflow-x-auto my-10`}>
                <table className="text-black w-full text-left border border-collapse rounded sm:border-separate border-slate-200">
                    <tbody>
                        <tr>
                            <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">#</th>
                            <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Name</th>
                            <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Image</th>
                            <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Age</th>
                            <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Experience</th>
                            <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Action</th>
                        </tr>
                        {
                            trainers?.map((train, idx) => <tr key={train._id}>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{idx + 1}</td>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{train?.name}</td>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                                    <div className="w-14 rounded-full">
                                        <img className="rounded-full" src={train?.photo} alt="" />
                                    </div>
                                </td>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{train?.age}</td>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{train?.experience}</td>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                                    <FaTrashAlt onClick={() => handleDelete(train)} className="text-xl text-red-600">
                                    </FaTrashAlt>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllTrainers;
import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";

const AllTrainers = () => {
    const axiosPrivate = useAxiosPrivate();
    const { data: trainers = [], refetch } = useQuery({
        queryKey: ['trainee'],
        queryFn: async () => {
            const { data } = await axiosPrivate.get('/getTrainer')
            return data;
        }
    })
    console.log(trainers)

    const handleDelete = (item) => {
        console.log(item)
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
                const { data } = await axiosPrivate.delete(`/deleteTrainer/${item?.email}`)
                console.log(data);
                if (data.deletedTrainer.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Trainer has been deleted.",
                        icon: "success"
                    });
                }
                refetch()
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
                            <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100 text-center">#</th>
                            <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100 text-center">Name</th>
                            <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100 text-center">Image</th>
                            <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100 text-center">Age</th>
                            <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100 text-center">Experience</th>
                            <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100 text-center">Action</th>
                        </tr>
                        {
                            trainers?.map((train, idx) => <tr key={train._id}>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 text-center">{idx + 1}</td>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 text-center">{train?.name}</td>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 text-center">
                                    <div className="flex justify-center">
                                        <img className="w-14" src={train?.photo} alt="" />
                                    </div>
                                </td>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 text-center">{train?.age}</td>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 text-center">{train?.experience}yrs</td>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 flex justify-center items-center">
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
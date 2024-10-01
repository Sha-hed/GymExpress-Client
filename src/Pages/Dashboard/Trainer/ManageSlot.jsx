import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosCommon from "../../../Hooks/useAxiosCommon";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";


const ManageSlot = () => {

    const axiosSecure = useAxiosSecure()
    const { user } = useAuth();
    const email = user?.email;
    console.log(email);
    const { refetch, data: slots = [] } = useQuery({
        queryKey: ['price'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/payment/${email}`)
            return data;
        }
    })

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/payment/${id}`)
                    .then(data => {
                        if (data.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Slot has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });
    }

    return (
        <div>
            <h1 className="text-center my-5 text-3xl font-bold underline">Manage Slot!</h1>
            <table className="text-black w-full border border-collapse rounded sm:border-separate border-slate-200 text-center">
                <tbody>
                    <tr>
                        <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">#</th>
                        <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">userName</th>
                        <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">SelectedClass</th>
                        <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Slot</th>
                        <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Price</th>
                        <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Action</th>
                    </tr>
                    {
                        slots?.map((m, id) => <tr key={m._id}>
                            <td>{id + 1}</td>
                            <td>{m?.userName}</td>
                            <td>{m?.selectedClass}</td>
                            <td>{m?.slot}</td>
                            <td>${m?.price}</td>
                            <td className="text-center"><button onClick={() => handleDelete(m._id)}><FaTrashAlt className="text-red-400 text-xl text-center"></FaTrashAlt></button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageSlot;
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosGeneral from "../../../Hooks/useAxiosGeneral";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";
import MyTrainer from '../../../components/MyTrainer'


const BookedClasses = () => {

    const { user } = useAuth()
    const axiosPrivate = useAxiosPrivate();
    const { data: booked = [] } = useQuery({
        queryKey: ['booked'],
        queryFn: async () => {
            const { data } = await axiosPrivate.get(`/getTrainerBookedClass/${user?.email}`)
            return data;
        }
    })


    // const handleDelete = (id) => {
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!"
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             axiosSecure.delete(`/payment/${id}`)
    //                 .then(data => {
    //                     if (data.data.deletedCount) {
    //                         Swal.fire({
    //                             title: "Deleted!",
    //                             text: "Slot has been deleted.",
    //                             icon: "success"
    //                         });
    //                         refetch()
    //                     }
    //                 })
    //         }
    //     });
    // }

    return (
        <>
        <h1 className="text-center underline font-semibold text-xl mt-10">Booked Classes</h1>
        <div className="flex justify-center items-center mt-10">
            {
             booked?.map((classes,id)=><MyTrainer book={classes} key={id}></MyTrainer>)
            }
        </div>

        </>
    );
};

export default BookedClasses;
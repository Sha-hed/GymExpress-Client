import { useQuery } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPrivate from "../Hooks/useAxiosPrivate";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";


const ReviewYourBooking = () => {
    const { user } = useAuth()
    const location = useLocation();
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate()
    const classId = location?.state?.classId
    const trainerId = location?.state?.trainerId
    const { data: classes = [] } = useQuery({
        queryKey: ['class'],
        queryFn: async () => {
            const { data } = await axiosPrivate.get(`/getClass/${classId}`)
            return data;
        }
    })
    const { data: trainer = [] } = useQuery({
        queryKey: ['trainer'],
        queryFn: async () => {
            const { data } = await axiosPrivate.get(`/getTrainer/${trainerId}`)
            return data;
        }
    })
    const { name, age, experience, photo, email, days, time } = trainer
    const { category, description, photoURL, title } = classes
    const handleBooking = async () => {
        const bookingClass = {
            userEmail: user?.email,
            trainerId,
            trainerName:name,
            trainDays: days,
            trainTime:time,
            trainerPhoto: photo,
            trainerEmail: email,
            classId,
            classCategory: category,
            classTitle:title,
            classPhoto:photoURL
        }
        const { data } = await axiosPrivate.post("/bookingClass", bookingClass)
        if (data.insertedId) {
            Swal.fire({
                position: "top",
                icon: "success",
                title: "Class Booking Successful",
                showConfirmButton: false,
                timer: 1500
            });
            setTimeout(() => {
                navigate('/')
            }, 2000)
        }
    }
    return (
        <div className="bg-black pt-20 text-white">
            <div className="bg-[#2C2C2C] min-h-screen">
                <div className="pb-10">
                    {/* Class Card */}
                    <div className="bg-[#2C2C2C] pt-10 min-h-screen relative">
                        <div className="relative max-w-6xl mx-auto px-5 md:px-0">
                            <h1 className="font-bold underline text-2xl mb-5">Review Your Booking</h1>
                            <img src={photoURL} alt="" />
                            <div className="relative md:absolute md:top-[70px] md:right-[350px] mt-2 md:mt-0">
                                <h1 className="font-bold md:text-3xl text-[#FFD700]">{category}</h1>
                            </div>
                            <div className="relative md:absolute w-full md:w-[400px] md:top-[130px] md:right-[100px] text-[#AFB2B7]">
                                <h1 className="text-white text-xl font-bold">{title}</h1>
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>
                    {/* Trainer Card  */}
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row px-5 md:px-0 mt-10 md:mt-0">
                        <div className="w-full md:w-1/2">
                            <img src={photo} alt="" />
                        </div>
                        <div className="w-full md:w-1/3 space-y-2">
                            <h1 className="text-lg md:text-3xl font-bold mt-5 text-[#FFD700] md:-translate-x-36">{name}</h1>
                            <div className="md:translate-x-20 text-[#AFB2B7]">
                                <p>Age: {age}years</p>
                                <h1>{experience} years of experience</h1>
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 justify-center my-10">
                        {/* <button className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base ">View Details</button> */}
                        <button onClick={handleBooking} className="rounded-md border border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white  py-2  duration-300 hover:bg-gray-200">Confirm Booking</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewYourBooking;
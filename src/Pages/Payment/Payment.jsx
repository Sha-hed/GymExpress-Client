import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosCommon from "../../Hooks/useAxiosCommon";
import Swal from "sweetalert2";


const Payment = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const { user } = useAuth();
    const axiosCommon = useAxiosCommon();
    const trainerName = location?.state?.TrainerName
    const trainerEmail = location?.state?.TrainerEmail
    const slot = location?.state?.slot;
    const price = location?.state?.price;
    const selectedClass = location?.state?.classes
    const userName = user?.displayName;
    const userEmail = user?.email;
    const payment = { trainerName, trainerEmail, slot, price, selectedClass, userName, userEmail }
    const handleConfirm = async () => {
        const { data } = await axiosCommon.post('/payment', payment);
        if(data.insertedId){
            Swal.fire({
                position: "top",
                icon: "success",
                title: "Payment received successfully. Thank you for booking your class.",
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/')
        }
        console.log(data);
    }
    return (
        <>
            <h1 className="text-center uppercase underline font-semibold text-3xl my-10 text-green-600">Confirm Booking</h1>
            <div className="w-[500px] space-y-3 border my-10 mx-auto p-5 shadow-xl bg-gray-200">
                <h1 className="font-semibold text-xl">Trainer Name : {trainerName}</h1>
                <h1 className="font-semibold text-xl">Trainer Name : {trainerEmail}</h1>
                <h1 className="font-semibold text-xl">Selected Slot :{slot}</h1>
                <h1 className="font-semibold text-xl">Class :{selectedClass}</h1>
                <h1 className="font-semibold text-xl">Price : ${price}</h1>
                <h1 className="font-semibold text-xl">User Name : {userName}</h1>
                <h1 className="font-semibold text-xl">User Email : {userEmail}</h1>
                <div className="flex justify-center items-center gap-3">
                    <button onClick={handleConfirm} className=" text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Confirm</button>
                </div>
            </div>
        </>
    );
};

export default Payment;
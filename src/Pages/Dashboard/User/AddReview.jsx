import Swal from "sweetalert2";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";
import useAuth from "../../../Hooks/useAuth";


const AddReview = () => {
    const { user } = useAuth();
    const axiosPrivate = useAxiosPrivate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const userName = e.target.userName.value
        const userEmail = e.target.userEmail.value;
        const review = e.target.details.value;
        const photoURL = e.target.photoURL.value;
        const reviews = { userName, userEmail, review, photoURL }
        const { data } = await axiosPrivate.post('/review', reviews)
        if (data.insertedId) {
            Swal.fire({
                position: "top",
                icon: "success",
                title: "Review Added Successfully",
                showConfirmButton: false,
                timer: 1500
            });
            e.target.reset()
        }
        console.log(data)
    }
    return (
        <div>
            <h1 className="text-center font-bold underline text-2xl my-10">Write Review</h1>
            <form onSubmit={handleSubmit}>
                <div className="flex justify-between gap-5">
                    <div className="w-1/2 flex flex-col space-y-3">
                        <label className="font-semibold text-xl w-full">UserName</label>
                        <input className="p-3 border outline-none w-full" type="text" name="userName" id="" defaultValue={user?.displayName} />
                    </div>
                    <div className="w-1/2 flex flex-col space-y-3">
                        <label className="font-semibold text-xl w-full">userEmail</label>
                        <input className="p-3 border outline-none w-full" type="text" name="userEmail" id="" defaultValue={user?.email} />
                    </div>
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold text-xl w-full my-4">Write Review</label>
                    <textarea name="details" id="" rows={5} className="outline-none border p-3" placeholder="Write Review"></textarea>
                </div>
                <div className="w-[49%] flex flex-col space-y-3 mt-3">
                    <label className="font-semibold text-xl w-full">Image URL</label>
                    <input className="p-3 border outline-none w-full" type="text" name="photoURL" id="" defaultValue={user?.photoURL} />
                </div>
                <div className="text-center mt-7">
                    <button type="submit" className="w-[200px] mt-5 text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Add Blog</button>
                </div>
            </form>
        </div>
    );
};

export default AddReview;
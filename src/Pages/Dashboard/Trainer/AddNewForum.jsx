import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import useAxiosCommon from "../../../Hooks/useAxiosCommon";


const AddNewForum = () => {
    const { user } = useAuth();
    const email = user?.email;
    const axiosCommon = useAxiosCommon();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.des.value;
        const forum = { title, description, email };
        const { data } = await axiosCommon.post('/add-forum',forum)
        if (data.insertedId) {
            Swal.fire({
                position: "top",
                icon: "success",
                title: "Forum Added Successfully",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
    return (
        <div>
            <h1 className="text-center font-bold underline text-2xl my-10">Add New Forum</h1>
            <form onSubmit={handleSubmit}>
                <div className="w-1/2 flex flex-col space-y-3">
                    <label className="font-semibold text-xl w-full">Forum Title</label>
                    <input className="p-3 border outline-none w-full rounded-xl" type="text" name="title" id="" />
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold text-xl w-full my-4">Forum Details</label>
                    <textarea name="des" id="" rows={6} className="outline-none border p-3 rounded-xl"></textarea>
                </div>
                <div className="flex justify-center items-center my-10">
                    <input className="w-1/2 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer" type="submit" value="Add Forum" />
                </div>
            </form>
        </div>
    );
};

export default AddNewForum;
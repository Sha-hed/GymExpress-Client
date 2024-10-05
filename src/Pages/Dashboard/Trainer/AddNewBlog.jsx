import Swal from "sweetalert2";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";


const AddNewBlog = () => {

    const axiosPrivate = useAxiosPrivate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const category = e.target.category.value
        const title = e.target.title.value;
        const details = e.target.details.value;
        const photoURL = e.target.photoURL.value;
        const blog = { category, title, details, photoURL}
        const { data } = await axiosPrivate.post('/add-forum', blog)
        if (data.insertedId) {
            Swal.fire({
                position: "top",
                icon: "success",
                title: "Blog Added Successfully",
                showConfirmButton: false,
                timer: 1500
            });
        }
        console.log(blog)
    }
    return (
        <div>
            <h1 className="text-center font-bold underline text-2xl my-10">Add New Blog</h1>
            <form onSubmit={handleSubmit}>
                <div className="flex justify-between gap-5">
                    <div className="w-1/2 flex flex-col space-y-3">
                        <label className="font-semibold text-xl w-full">Category</label>
                        <select name="category" id="" className="p-3 border outline-none w-full">
                            <option value="">Select category</option>
                            <option value="Workout Routines">Workout Routines</option>
                            <option value="Nutrition and Diet">Nutrition and Diet</option>
                            <option value="Fitness Tips">Fitness Tips</option>
                            <option value="Fitness Challenges">Fitness Challenges</option>
                        </select>
                        {/* <input className="p-3 border outline-none w-full" type="text" name="title" id="" placeholder="Enter Blog Category" /> */}
                    </div>
                    <div className="w-1/2 flex flex-col space-y-3">
                        <label className="font-semibold text-xl w-full">Title</label>
                        <input className="p-3 border outline-none w-full" type="text" name="title" id="" placeholder="Enter Blog Title" />
                    </div>
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold text-xl w-full my-4">Blog Details</label>
                    <textarea name="details" id="" rows={5} className="outline-none border p-3" placeholder="Write Blog Details"></textarea>
                </div>
                <div className="w-[49%] flex flex-col space-y-3 mt-3">
                    <label className="font-semibold text-xl w-full">Image URL</label>
                    <input className="p-3 border outline-none w-full" type="text" name="photoURL" id="" placeholder="Enter Blog ImageURL"/>
                </div>
                <div className="text-center mt-7">
                    <button type="submit" className="w-[200px] mt-5 text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Add Blog</button>
                </div>
            </form>
        </div>
    );
};

export default AddNewBlog;
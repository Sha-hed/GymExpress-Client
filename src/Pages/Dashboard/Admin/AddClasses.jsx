import Swal from "sweetalert2";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";
const AddClasses = () => {
    const axiosPrivate = useAxiosPrivate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const category = e.target.category.value;
        const title = e.target.title.value;
        const description = e.target.des.value;
        const photoURL = e.target.image.value;
        const addClass = { category, title, description, photoURL };
        const { data } = await axiosPrivate.post('/addClass', addClass)
        console.log(data)
        if (data.insertedId) {
            Swal.fire({
                position: "top",
                icon: "success",
                title: "Class Added Successfully",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    return (
        <div>
            <h1 className="text-center font-bold underline text-2xl my-10">Add a Class</h1>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-5 my-5">
                    <div className="flex justify-between gap-5">
                        <div className="w-1/2 flex flex-col space-y-3">
                            <label className="font-semibold text-xl w-full">Category</label>
                            <select name="category" id="" className="py-3 rounded">
                                <option value="" className="text-gray-100">Select a category</option>
                                <option value="Exercise Physiology">Exercise Physiology</option>
                                <option value="Workout Program Design">Workout Program Design</option>
                                <option value="Strength Training">Strength Training</option>
                                <option value="Injury Prevention & Rehabilitation">Injury Prevention & Rehabilitation</option>
                                <option value="Stretching & Mobility">Stretching & Mobility</option>
                                <option value="Cardiovascular Training">Cardiovascular Training</option>
                            </select>
                        </div>
                        <div className="w-1/2 flex flex-col space-y-3">
                            <label className="font-semibold text-xl w-full">Title</label>
                            <input className="p-3 border outline-none w-full rounded" type="text" name="title" id="" placeholder="Add Title" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label className="font-semibold text-xl w-full mb-4">Class Details</label>
                        <textarea name="des" id="" rows={5} className="outline-none border p-3 rounded" placeholder="Write Class Details"></textarea>
                    </div>
                    <div className="w-1/2 flex flex-col space-y-3">
                        <label className="font-semibold text-xl w-full">PhotoURL</label>
                        <input className="p-3 border outline-none w-full rounded" type="text" name="image" id="" placeholder="Add PhotoURL" />
                    </div>
                    {/* <h1 className="text-red-400">*Add at least one trainer id who conducts the class</h1>
                    <div className="w-1/2 flex flex-col space-y-3">
                        <label className="font-semibold text-xl w-full">Trainer1</label>
                        <input className="p-3 border outline-none w-full rounded-xl" type="text" name="t1" id="" />
                        <label className="font-semibold text-xl w-full">Trainer2</label>
                        <input className="p-3 border outline-none w-full rounded-xl" type="text" name="t2" id="" />
                        <label className="font-semibold text-xl w-full">Trainer3</label>
                        <input className="p-3 border outline-none w-full rounded-xl" type="text" name="t3" id="" />
                        <label className="font-semibold text-xl w-full">Trainer4</label>
                        <input className="p-3 border outline-none w-full rounded-xl" type="text" name="t4" id="" />
                        <label className="font-semibold text-xl w-full">Trainer5</label>
                        <input className="p-3 border outline-none w-full rounded-xl" type="text" name="t5" id="" />
                    </div> */}
                    <div className="text-center">
                        <button type="submit" className="w-[200px] mt-5 text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Add Class</button>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default AddClasses;
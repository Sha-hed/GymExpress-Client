import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const AddClasses = () => {
    const axiosSecure = useAxiosSecure();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.image.value;
        const des = e.target.des.value;
        const t1 = e.target.t1.value
        const t2 = e.target.t2.value
        const t3 = e.target.t3.value
        const t4 = e.target.t4.value
        const t5 = e.target.t5.value
        const emails = [t1, t2, t3, t4, t5];
        const trainerEmail = emails.filter(email => email !== '')
        const addClass = { name, photo, des, trainerEmail };
        const { data } = await axiosSecure.post('/add-class', addClass)
        if (data.insertedId) {
            Swal.fire({
                position: "top",
                icon: "success",
                title: "Class Added Successfully",
                showConfirmButton: false,
                timer: 1500
            });
        }
        console.log(addClass);

    }

    return (
        <div>
            <h1 className="text-center font-bold underline text-2xl">Add a Class</h1>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-5 my-5">
                    <div className="flex justify-between gap-5">
                        <div className="w-1/2 flex flex-col space-y-3">
                            <label className="font-semibold text-xl w-full">Class Name</label>
                            <input className="p-3 border outline-none w-full rounded-xl" type="text" name="name" id="" />
                        </div>
                        <div className="w-1/2 flex flex-col space-y-3">
                            <label className="font-semibold text-xl w-full">Photo</label>
                            <input className="p-3 border outline-none w-full rounded-xl" type="text" name="image" id="" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label className="font-semibold text-xl w-full my-4">Class Details</label>
                        <textarea name="des" id="" rows={6} className="outline-none border p-3 rounded-xl"></textarea>
                    </div>
                    <h1 className="text-red-400">*Add at least one trainer id who conducts the class</h1>
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
                    </div>
                    <div className="text-center">
                        <input className="w-1/2 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer" type="submit" value="Add Class" />
                    </div>
                </div>
            </form>

        </div>
    );
};

export default AddClasses;
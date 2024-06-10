import Swal from 'sweetalert2';
import useAxiosCommon from '../../../Hooks/useAxiosCommon';
import './NewsLetter.css'
const NewsLetter = () => {

    const axiosCommon = useAxiosCommon();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email };
        // console.log(user);
        const { data } = await axiosCommon.post('/newsLetter', user)
        if (data.insertedId) {
            if (data.insertedId) {
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Thank You for Subscribing!",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    }

    return (
        <>
            <h1 className='text-center font-bold uppercase text-4xl underline mt-10'>NewsLetter</h1>
            <div className='news my-5 p-5 rounded-xl'>
                <div className='p-10 mx-auto text-center flex flex-col space-y-4'>
                    <h1 className='block underline font-bold text-3xl text-white'>Join With Us</h1>
                    <form onSubmit={handleSubmit}>
                        <label className='mb-3 block font-bold text-3xl text-white'>Your Name</label>
                        <input required className='p-3 w-1/2 bg-gray-400 rounded-xl' type="text" name="name" id="" />
                        <label className='my-3 block font-bold text-3xl text-white' htmlFor="">Your Email</label>
                        <input required className='p-3 w-1/2 bg-gray-400 rounded-xl' type="email" name="email" id="" />
                        <div className='flex justify-center items-center my-5'>
                            <input className="block text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" type="submit" value="Subscribe Now!" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default NewsLetter;
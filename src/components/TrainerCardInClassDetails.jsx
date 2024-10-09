
import { useNavigate } from "react-router-dom";


const TrainerCardInClassDetails = ({ trainer, bookedClass }) => {
    // const [openModal, setOpenModal] = useState(false);
    // const { user } = useAuth()
    const navigate = useNavigate()
    // const applyTrainer = () =>{
    //     if(user){
    //         navigate('/becomeGymTrainer')
    //     }
    //     setOpenModal(true)
    // }
    const handleGoing = () => {
        const classId = bookedClass._id
        const trainerId = trainer._id
        navigate("/reviewBooking", { state: { classId, trainerId } })
    }

    const { name, age, photo, selectedSkills } = trainer
    return (
        <div>
            {/* <div className="mx-auto flex w-72 items-center justify-center">
                <div onClick={() => setOpenModal(false)} className={`fixed z-[100] flex items-center justify-center ${openModal ? 'opacity-1 visible' : 'invisible opacity-0'} inset-0 bg-black/20 backdrop-blur-sm duration-100`}>
                    <div onClick={(e_) => e_.stopPropagation()} className={`absolute w-80 rounded-lg bg-white p-6 text-center drop-shadow-2xl dark:bg-gray-800 dark:text-white ${openModal ? 'opacity-1 translate-y-0 duration-300' : 'translate-y-20 opacity-0 duration-150'}`}>
                        <div className="flex flex-col items-center justify-center space-y-4">
                            <svg className="w-16 stroke-rose-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g><path opacity="0.4" d="M12 7.75V13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21.0802 8.58003V15.42C21.0802 16.54 20.4802 17.58 19.5102 18.15L13.5702 21.58C12.6002 22.14 11.4002 22.14 10.4202 21.58L4.48016 18.15C3.51016 17.59 2.91016 16.55 2.91016 15.42V8.58003C2.91016 7.46003 3.51016 6.41999 4.48016 5.84999L10.4202 2.42C11.3902 1.86 12.5902 1.86 13.5702 2.42L19.5102 5.84999C20.4802 6.41999 21.0802 7.45003 21.0802 8.58003Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity="0.4" d="M12 16.2002V16.3002" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
                            <h6 className="text-center text-sm font-medium opacity-70">To book a class, please log in to your account first.</h6>
                            <div className='flex gap-2'>
                                <Link to='/signin' className="rounded-md bg-indigo-600 px-6 py-2 text-sm text-white">
                                    Login now
                                </Link>
                                <button onClick={() => setOpenModal(false)} className="rounded-md border border-rose-600 px-6 py-2 text-sm text-rose-600 hover:bg-rose-600 hover:text-white">
                                    Skip
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="max-w-[350px] space-y-4 rounded-lg bg-white p-6 shadow-lg md:w-[350px] dark:bg-[#18181B]">
                <img width={400} height={400} className="h-[275px] w-[350px] rounded-lg object-cover" src={photo} alt="card navigate ui" />
                <div className="h-[150px] space-y-1">
                    <div className="flex justify-between">
                        <h1 className="text-lg font-semibold ">{name}</h1>
                        <h1>{age}yrs</h1>
                    </div>
                    <p className="">Specialized In
                        {
                            selectedSkills?.map((skill, id) => <a className="m-1 bg-gray-800 text-green-700" key={id}>#{skill}</a>)
                        }
                    </p>
                    {/* <p className="text-sm text-gray-500 dark:text-white/60">This is a brief description of the product. It highlights the key features and benefits.</p> */}
                    {/* <div className="text-lg font-semibold">$99.99</div> */}
                </div>
                <div className="flex gap-4 justify-center">
                    {/* <button className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base ">Add to Cart</button> */}
                    <button onClick={handleGoing} className="rounded-md border border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white  py-2  duration-300 hover:bg-gray-200">Book This Trainer</button>
                </div>
            </div>

        </div>
    );
};

export default TrainerCardInClassDetails;
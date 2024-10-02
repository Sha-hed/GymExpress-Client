import { useState } from 'react';
import apply from '../../../assets/images2/john.jpg'
import { Link} from 'react-router-dom';

const BeaTrainer = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            <div className="mx-auto flex w-72 items-center justify-center">
                <div onClick={() => setOpenModal(false)} className={`fixed z-[100] flex items-center justify-center ${openModal ? 'opacity-1 visible' : 'invisible opacity-0'} inset-0 bg-black/20 backdrop-blur-sm duration-100`}>
                    <div onClick={(e_) => e_.stopPropagation()} className={`absolute w-80 rounded-lg bg-white p-6 text-center drop-shadow-2xl dark:bg-gray-800 dark:text-white ${openModal ? 'opacity-1 translate-y-0 duration-300' : 'translate-y-20 opacity-0 duration-150'}`}>
                        <div className="flex flex-col items-center justify-center space-y-4">
                            <svg className="w-16 stroke-rose-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g><path opacity="0.4" d="M12 7.75V13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21.0802 8.58003V15.42C21.0802 16.54 20.4802 17.58 19.5102 18.15L13.5702 21.58C12.6002 22.14 11.4002 22.14 10.4202 21.58L4.48016 18.15C3.51016 17.59 2.91016 16.55 2.91016 15.42V8.58003C2.91016 7.46003 3.51016 6.41999 4.48016 5.84999L10.4202 2.42C11.3902 1.86 12.5902 1.86 13.5702 2.42L19.5102 5.84999C20.4802 6.41999 21.0802 7.45003 21.0802 8.58003Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity="0.4" d="M12 16.2002V16.3002" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
                            <h6 className="text-center text-sm font-medium opacity-70">For applying as a gym instructor, please log in to your account first.</h6>
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
            </div>
            <div className='mt-20 text-white relative bg-[#1E1E1E] p-20'>
                <div className='w-[50%]'>
                    <img className='object-cover' src={apply} alt="" />
                </div>
                <div className='absolute top-[20%] left-1/3'>
                    <h1 className='text-5xl font-bold text-center'>Join Our Team of Professional <br /> Gym Instructors</h1>
                </div>
                <div className='w-[400px] absolute top-[40%] right-[250px]'>
                    <p className='text-xl'>Interested in becoming a gym instructor? Join our team and help others achieve their fitness goals! We're looking for passionate individuals who are ready to inspire and lead. Whether you're an experienced trainer or just starting out, apply today and be part of a motivating and supportive fitness community!</p>
                    <div className="flex justify-center">
                        <button onClick={() => setOpenModal(true)} type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 my-10 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Apply to Be a Gym Instructor</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BeaTrainer;
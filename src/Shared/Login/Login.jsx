import { FcGoogle } from "react-icons/fc";
import { useForm } from 'react-hook-form';
import ll from '../../assets/images/Login.jpg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosCommon from "../../Hooks/useAxiosCommon";

const Login = () => {
    const { user } = useAuth();
    const axiosCommon = useAxiosCommon();
    const [error, setError] = useState(null);
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2200,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    const location = useLocation();
    const koiJava = location?.state?.from || '/'
    const navigate = useNavigate()
    const { login, google } = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm({

    });

    const onSubmit = data => {
        const email = data.Email;
        const password = data.Password;
        setError('');
        // resetField("Email")
        // resetField("Password")
        // const user = { email, password };
        // console.log(user);
        login(email, password)
            .then(result => {
                Toast.fire({
                    icon: "success",
                    title: "Signed in successfully"
                });
                setTimeout(() => {
                    navigate(koiJava)
                }, 2500)
                console.log(result.user)
            })
            .catch(error => {
                setError(error.message);
                console.log(error.messaged)
            })
    }
    const googleLogin = () => {
        google()
            .then(async (result) => {
                const name = result?.user?.displayName
                const email = result?.user?.email;
                const user = { name, email }
                const { data } = await axiosCommon.post('/users', user)
                console.log(data);
                Toast.fire({
                    icon: "success",
                    title: "Signed in successfully"
                });
                setTimeout(() => {
                    navigate(koiJava)
                }, 2500)
                console.log(result.user)
            })
            .catch(error => {
                setError(error.message);
                console.log(error.message)
            })
    }
    return (
        <div className="max-w-6xl mx-auto my-10 p-2">
            <h1 className='text-center font-bold text-2xl underline mb-5'>Login Now</h1>
            <div className=' flex flex-col md:flex-row justify-between'>
                <div className='w-1/2 mx-auto'>
                    <img src={ll} alt="" />
                </div>
                <div className='w-full md:w-1/2'>

                    <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
                        <label className='font-bold text-xl mb-3' htmlFor="">Email</label><br />
                        <input type="email" placeholder="Email"
                        defaultValue={'admin@gmail.com'}
                            className='p-3 w-full border'
                            {...register("Email", {})} />
                        <label className='font-bold text-xl mb-3' htmlFor="">Password</label><br />
                        <input type="password"
                        defaultValue={'$Shahed'}
                            className='p-3 w-full border'
                            placeholder="Password"
                            {...register("Password", { required: true })} />
                        <div className="flex justify-center items-center">
                            <input className="w-1/2 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" type="submit" value='Login' />

                        </div>
                    </form>
                    {
                        error && <p className="text-center text-xl mt-1 font-bold text-red-600">{error}</p>
                    }
                    <div className="flex justify-center items-center">
                    <button onClick={googleLogin} type="button" className="flex justify-center items-center gap-3 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><FcGoogle className="text-2xl" />Login With Google</button>
                    </div>
                    <p className='text-xl font-semibold gap-0 text-center'>New to this Website ? Please <Link className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" to='/register'>Register</Link></p>
                </div>
            </div>
        </div>

    );
};

export default Login;
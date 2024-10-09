import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosGeneral from "../../Hooks/useAxiosGeneral"
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { Helmet } from "react-helmet-async";

export default function SignIn() {
    const axiosGeneral = useAxiosGeneral()
    const { login, google, createUser } = useAuth();
    const [signUp, setSignUp] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const page = location?.state?.from || '/'
    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)
        login(email, password)
            .then(result => {
                toast.success('Logged in Successfully!')
                navigate(page)
                console.log(result)
            })
            .catch(error => {
                toast.error(error.message, {
                    duration: 2000
                })
            })
    }
    const handleSignUp = async (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        const photoURL = e.target.photoURL.value || 'https://i.ibb.co.com/tsLxDCn/user.png'
        const role = 'user'
        const user = { name, email, password, photoURL, role }
        createUser(email, password)
            .then(() => {
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photoURL
                })
                    .then(async () => {
                        const { data } = await axiosGeneral.post('/users', user)
                        console.log(data);
                        console.log('Profile Update Successfully At Register Page!')
                        toast.success('Signed Up Successfully!', {
                            duration: 4000
                        })
                        navigate('/')
                    })
                    .catch((error) => {
                        toast.error(error.message, {
                            duration: 2000
                        })
                    })
            })
            .catch((error) => {
                toast.error(error.message, {
                    duration: 4000
                })
            })
    }
    const GoogleLogin = () => {
        google()
            .then(async(result) => {
                const name = result?.user?.displayName
                const email = result?.user?.email;
                const password = 'Google123'
                const photoURL = result?.user?.photoURL
                const role = 'user'
                const user = { name, email, password, photoURL, role }
                const { data } = await axiosGeneral.post('/users', user)
                console.log(data);
                toast.success('Logged in Successfully!')
                navigate(page)
                console.log(result)
            })
            .catch(error => {
                toast.error(error.message, {
                    duration: 4000
                })
            })
    }
    return (
        <div className="min-h-screen py-32">
            <Helmet>
                <title>GymExpress | Login</title>
            </Helmet>
            <div className="mx-auto w-full max-w-sm overflow-hidden rounded-lg border bg-white dark:border-zinc-700 dark:bg-zinc-900 text-white">
                <div className={`flex select-none gap-2 border-b p-2.5 *:flex-1 *:rounded-md *:border *:p-2 *:text-center *:uppercase *:shadow-inner *:outline-none dark:border-zinc-700 *:dark:border-zinc-600 ${signUp ? 'last-of-type:*:bg-zinc-600 last-of-type:*:text-white' : 'first-of-type:*:bg-zinc-600 first-of-type:*:text-white'}`}>
                    <button onClick={() => setSignUp(false)}>signin</button>
                    <button onClick={() => setSignUp(true)}>signup</button>
                </div>

                <div className="w-full flex-col items-center overflow-hidden p-4 sm:p-8">
                    {/* sign up form  */}
                    <form onSubmit={handleSignUp} className={`${signUp ? 'h-full duration-300' : 'invisible h-0 opacity-0'} space-y-3 sm:space-y-5`}>
                        <h1 className="mb-6 uppercase backdrop-blur-sm sm:text-2xl">Sign Up</h1>
                        <div className="space-y-4">
                            <input name="name" type="text" placeholder="Name" className="block w-full rounded-md border p-2.5 outline-none text-black" />
                            <input name="email" type="email" placeholder="Email" className="block w-full rounded-md border p-2.5 outline-none text-black" />
                            <input name="password" type="password" placeholder="Password" className="block w-full rounded-md border p-2.5 outline-none text-black" />
                            <input name="photoURL" type="text" placeholder="*Optional: Enter PhotoURL" className="block w-full rounded-md border p-2.5 outline-none text-black" />
                        </div>
                        {/* button type will be submit for handling form submission*/}
                        <button type="submit" className="mx-auto block rounded-md border px-5 py-2 uppercase shadow-lg duration-200 hover:bg-zinc-400/10 dark:border-zinc-700 dark:hover:bg-zinc-700 dark:hover:text-white">
                            Sign Up
                        </button>
                        <p className="text-center">Already have an account?
                            <button type="button" onClick={() => setSignUp(!signUp)} className="font-semibold underline">
                                Signin
                            </button>
                        </p>
                    </form>

                    {/* signin form */}
                    <form onSubmit={handleLogin} className={`${signUp ? 'h-0 opacity-0' : 'h-full duration-300'} space-y-3 sm:space-y-5`}>
                        <h1 className="mb-3 uppercase sm:mb-5 sm:text-2xl">Sign In</h1>
                        <input name="email" type="email" placeholder="Email" className="block w-full rounded-md border p-2.5 outline-none text-black" />
                        <input name="password" type="password" placeholder="Password" className="block w-full rounded-md border p-2.5 outline-none text-black" />
                        <p className="text-end text-sm text-zinc-600 dark:text-zinc-300">
                            <a href="#" className="hover:underline">Forget password?</a>
                        </p>
                        {/* button type will be submit for handling form submission*/}
                        <button type="submit" className="mx-auto block rounded-md border px-5 py-2 uppercase shadow-lg duration-200 hover:bg-zinc-400/10 dark:border-zinc-700 dark:hover:bg-zinc-700 dark:hover:text-white">
                            Sign In
                        </button>
                        <p className="text-center">Don&apos;t have an account?
                            <button onClick={() => setSignUp(!signUp)} type="button" className="font-semibold underline">
                                Signup
                            </button>
                        </p>
                    </form>
                    {
                        !signUp && (<div className="mt-3 space-y-3 sm:space-y-5">
                            <hr className="border-zinc-700" />
                            <button onClick={GoogleLogin} className="mx-auto mb-4 mt-8 block rounded-md border px-5 py-2 shadow-lg duration-200 hover:bg-zinc-400/10 dark:border-zinc-700 dark:hover:bg-zinc-700 dark:hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="mr-2 inline-block h-5 w-5 fill-current"><path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path></svg>
                                Continue with Google
                            </button>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
}

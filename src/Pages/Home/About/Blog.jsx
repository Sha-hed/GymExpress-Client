

import useAuth from "../../../Hooks/useAuth";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate"

const Blog = () => {

    const { user }  = useAuth()

    const axiosPrivate = useAxiosPrivate()

    const handleVerify = async() =>{
          const { data } = await axiosPrivate.get(`/isAdmin?email=${user?.email}`)
          console.log(data)
    }
    
    return (
        <div className="text-white bg-[#0e0e0e] py-5">
            <h1 className="text-center font-bold uppercase text-xl my-5">our blog </h1>
            <h1 className="text-center font-bold text-5xl">Latest new & updates</h1>
            <div className="flex justify-center items-center my-10">
                   <button className="p-3 bg-sky-400 rounded-xl" onClick={handleVerify}>VerifyToken</button>
            </div>
        </div>
    );
};

export default Blog;
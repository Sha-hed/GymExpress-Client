import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPrivate from "./useAxiosPrivate";


const IsAdmin = () => {

    const { user } = useAuth();
    const axiosPrivate = useAxiosPrivate()

    const { data:isAdmin=false, isLoading } = useQuery({
        queryKey: ['admin'],
        queryFn: async()=>{
            const { data } = await axiosPrivate.get(`/isAdmin?email=${user?.email}`)
            return data.isAdmin
        }
    })
    console.log(isAdmin)

    return [isAdmin, isLoading]
};

export default IsAdmin;
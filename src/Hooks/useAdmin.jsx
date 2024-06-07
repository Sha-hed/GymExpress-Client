import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const axiosSecure = useAxiosSecure()
    const  { user , loading } = useAuth();
    const { data:isAdmin, isPending:isAdminLoading }  = useQuery({
        queryKey: ['isAdmin'],
        enabled: !loading,
        queryFn: async()=>{
            const { data } =await axiosSecure.get(`/isAdmin/${user?.email}`)
            return data.isAdmin;
        }
    })
    return [isAdmin,isAdminLoading]
};

export default useAdmin;
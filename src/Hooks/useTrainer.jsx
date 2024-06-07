import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useTrainer = () => {
    const axiosSecure = useAxiosSecure()
    const { user, loading } = useAuth();

    const { data:isTrainer, isPending:isTrainerLoading } = useQuery({
        queryKey: ['trainer'],
        enabled: !loading,
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/isTrain/${user?.email}`)
            return data.isTrainer;
        }
    })
    return [isTrainer, isTrainerLoading]
};

export default useTrainer;
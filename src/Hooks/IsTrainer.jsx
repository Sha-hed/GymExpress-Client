import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPrivate from "./useAxiosPrivate";


const IsTrainer = () => {

    const { user } = useAuth();
    const axiosPrivate = useAxiosPrivate()

    const { data: isTrainer = false, isLoadingTrainer } = useQuery({
        queryKey: ['trainer'],
        queryFn: async () => {
            const { data } = await axiosPrivate.get(`/isTrainers?email=${user?.email}`)
            return data.isTrainer
        }
    })
    console.log(isTrainer)

    return [isTrainer, isLoadingTrainer]
};

export default IsTrainer;
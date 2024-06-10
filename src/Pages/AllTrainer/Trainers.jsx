import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from '../../Hooks/useAxiosCommon';
import TrainerCard from "../../components/TrainerCard";
const Trainers = () => {
    const axiosCommon = useAxiosCommon();
    const { data:trainers = [] } = useQuery({
        queryKey: ['trainer'],
        queryFn: async()=>{
            const { data } =await axiosCommon.get('/trainers')
            return data;

        }
    })
    console.log(trainers)
    return (
        <div>
            <h1 className="text-3xl font-bold underline uppercase text-red-600 text-center my-5">All Trainers</h1>
            <div className="grid grid-cols-2 gap-5">
                {
                    trainers.map(trainer => <TrainerCard key={trainer._id} trainer={trainer}></TrainerCard>)
                }
            </div>
        </div>
    );
};

export default Trainers;
import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../../Hooks/useAxiosCommon";
import TeamCard from "../../../components/TeamCard";


const Team = () => {
    const axiosCommon = useAxiosCommon();
    const { data: trainers = [] } = useQuery({
        queryKey: ['team'],
        queryFn: async () => {
            const { data } = await axiosCommon.get('/get-trainer')
            return data;
        }
    })
    // console.log(trainers);
    return (
        <div className="my-20 bg-gray-100 rounded-xl p-5">
            <h1 className="text-center underline text-3xl font-bold uppercase my-10">Our Expert Trainers</h1>
            <div className="max-w-5xl mx-auto grid grid-cols-3 gap-5">
                {
                    trainers?.slice(0, 3).map(trainer => <TeamCard key={trainer._id} trainer={trainer}></TeamCard>)
                }
            </div>

        </div>
    );
};

export default Team;
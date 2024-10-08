import { useQuery } from "@tanstack/react-query";
import TrainerCard from "../../components/TrainerCard";
import Banner from '../../assets/images2/33.jpg'
import useAxiosGeneral from "../../Hooks/useAxiosGeneral";
import { Helmet } from "react-helmet-async";
const Trainers = () => {
    const axiosGeneral = useAxiosGeneral();
    const { data: trainers = [] } = useQuery({
        queryKey: ['trainer'],
        queryFn: async () => {
            const { data } = await axiosGeneral.get('/getTrainer')
            return data;

        }
    })
    // console.log(trainers)
    return (
        <div className="min-h-screen bg-black pt-20">
            <Helmet>
                <title>GymExpress | Trainers</title>
            </Helmet>
            <div className="bg-[#424242] py-10">
                <h1 className="text-3xl font-bold underline uppercase text-red-600 text-center mb-5">Our Specialized Trainers</h1>
                <div className="max-w-6xl mx-auto flex flex-wrap gap-x-5 gap-y-10 justify-center">
                    {
                        trainers.length>0 ? trainers?.map(trainer => <TrainerCard key={trainer._id} trainer={trainer}></TrainerCard>) : ''
                    }
                </div>
            </div>
        </div>
    );
};

export default Trainers;
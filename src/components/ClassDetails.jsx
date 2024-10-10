import { useQuery } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";
import useAxiosGeneral from "../Hooks/useAxiosGeneral";
import TrainerCardInClassDetails from "./TrainerCardInClassDetails";


const ClassDetails = () => {
    const axiosGeneral = useAxiosGeneral()
    const yourClass = useLoaderData();
    const { category, title, description, photoURL } = yourClass;
    
     const { data:trainers=[] } = useQuery({
        queryKey: ['trainee'],
        queryFn: async()=>{
            const { data } = await axiosGeneral.get('/getTrainer')
            return data
        }
     })

     const classTrainer = trainers.filter((trainer) => {
        console.log('To see trainer:', trainer.selectedSkill);
        return trainer.selectedSkills.some((skill) => {
            if (skill === category) {
                return true;
            }
            console.log('TrainerSkill:', skill);
            return false; 
        });
    });
    console.log('Class Trainer ',classTrainer)

    return (
        <div className="bg-black pt-24 text-white">
            <div className="bg-[#2C2C2C] py-10 min-h-screen relative px-5 md:px-0">
                <div className="relative max-w-6xl mx-auto">
                    <img src={photoURL} alt="" />
                    <div className="relative md:absolute md:top-[70px] md:right-[350px]">
                        <h1 className="font-bold md:text-3xl text-[#FFD700] text-center md:text-start">{category}</h1>
                    </div>
                    <div className="relative md:absolute w-full md:w-[400px] md:top-[130px] md:right-[100px] text-[#AFB2B7]">
                        <h1 className="text-white text-xl font-bold">{title}</h1>
                        <p>{description}</p>
                    </div>
                    <div>
                        <h1 className="text-lg md:text-3xl font-bold my-10 underline">Trainer Related This Class :</h1>
                    </div>
                    <div className="flex flex-wrap gap-5 justify-center">
                        {
                            classTrainer?.map((trainer,id)=>
                            <TrainerCardInClassDetails key={id}
                            bookedClass={yourClass}
                            trainer={trainer}>
                            </TrainerCardInClassDetails>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassDetails;
import { useQuery } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";
import useAxiosGeneral from "../Hooks/useAxiosGeneral";
import ClassCard from "./ClassCard";


const TrainerDetail = () => {
    const trainer = useLoaderData();
    const axiosGeneral = useAxiosGeneral();

    const { data: classes = [] } = useQuery({
        queryKey: ['class'],
        queryFn: async () => {
            const { data } = await axiosGeneral.get('/getClasses')
            return data;
        }
    })

    const hisClass = classes.filter((c) => {
        return trainer?.selectedSkills?.some((skills) => skills === c.category);
    });

    console.log(hisClass);


    const { name, photo, experience, age, description } = trainer
    console.log(trainer)
    return (
        // <div className="bg-black py-24 text-white">
        //     <div className="bg-[#2C2C2C] py-10 min-h-screen relative">
        //         <div className="relative max-w-6xl mx-auto">
        //             <img src={photoURL} alt="" />
        //             <div className="absolute top-[70px] right-[350px]">
        //                 <h1 className="text-white font-bold text-3xl">{category}</h1>
        //             </div>
        //             <div className="absolute w-[400px] top-[130px] right-[100px] text-[#AFB2B7]">
        //                 <h1 className="text-white text-xl font-bold">{title}</h1>
        //                 <p>{description}</p>
        //             </div>
        //             <div>
        //                 <h1 className="text-3xl font-bold my-10 underline">Trainer Related This Class :</h1>
        //             </div>
        //             {/* <div className="flex flex-wrap gap-5 justify-center">
        //                 {
        //                     classTrainer?.map((trainer, id) =>
        //                         <TrainerCardInClassDetails key={id} trainer={trainer}>
        //                         </TrainerCardInClassDetails>
        //                     )
        //                 }
        //             </div> */}
        //         </div>
        //     </div>
        // </div>
        <div className="bg-black py-24 text-white">
            <div className="bg-[#2C2C2C] py-10 min-h-screen">
                <div className="max-w-7xl mx-auto flex">
                    <div className="w-1/2">
                        <img src={photo} alt="" />
                    </div>
                    <div className="w-1/3 space-y-2">
                        <h1 className="text-5xl font-bold mt-5 -translate-x-40 text-[#FFD700]">{name}</h1>
                        <p>Age: {age}years</p>
                        <h1>{experience} years of experience</h1>
                        <p>{description}</p>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto">
                    <h1 className="underline text-2xl font-bold my-10">Classes Taken by {name} :</h1>
                    <div className="flex flex-wrap gap-5 justify-center">
                        {
                            hisClass?.map((classes, id) =>
                                <ClassCard key={id} cc={classes}>
                                </ClassCard>
                            )
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TrainerDetail;
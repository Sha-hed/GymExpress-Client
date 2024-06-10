

const TeamCard = ({ trainer }) => {
    return (
        <div className="bg-gray-200 p-5 flex flex-col justify-center items-center rounded-xl shadow-xl">
            <div className="w-32 rounded-full">
                <img src={trainer?.photo} className="rounded-full" alt="" />
            </div>
            <h1 className="font-semibold text-xl">{trainer?.name}</h1>
            <h1 className="font-semibold text-xl">Age : {trainer?.age} Years</h1>
            <h1 className="font-semibold text-xl">{trainer?.experience} years Experience</h1>
        </div>
    );
};

export default TeamCard;
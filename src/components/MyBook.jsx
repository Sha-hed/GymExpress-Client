

const MyBook = ({book}) => {
    const {  trainerName, trainDays, trainTime, classCategory, classTitle, classPhoto } = book
    return (
        <div className="w-[350px] border-2 border-gray-100 shadow p-5">
            <div className="">
                <img src={classPhoto} alt="" />
            </div>
            <h1 className="font-semibold">{classCategory}</h1>
            <h1 className="font-semibold">{classTitle}</h1>
            <h1 className="font-semibold">By {trainerName}</h1>
            <h1 className="font-semibold">ClassTime: {trainTime}</h1>
            <h1 className="flex flex-wrap font-semibold">Days :
                {
                    trainDays?.map((day, id) => <a className="mr-2" key={id}>{day}</a>)
                }
            </h1>
        </div>
    );
};

export default MyBook;
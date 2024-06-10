

const BookCard = ({ b, handleReview, setHandleReview }) => {
    const { trainerName, trainerEmail, userName, userEmail, slot, price, selectedClass } = b


    return (
        <div className="w-96 bg-white p-5 rounded-xl">
            <h1 className="font-semibold">Trainer Name : {trainerName}</h1>
            <h1 className="font-semibold">Trainer Email : {trainerEmail}</h1>
            <h1 className="font-semibold">Slot : {slot}</h1>
            <h1 className="font-semibold">Selected Class : {selectedClass}</h1>
            <h1 className="font-semibold">Price : ${price}</h1>
            <h1 className="font-semibold">UserName : {userName}</h1>
            <h1 className="font-semibold">UserEmail : {userEmail}</h1>
            <div className="flex justify-center items-center mt-5">
                <button onClick={()=>setHandleReview(!handleReview)} className="w-1/2 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add Review</button>
            </div>
        </div>
    );
};

export default BookCard;
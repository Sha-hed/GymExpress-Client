import useAuth from "../../../Hooks/useAuth";


const AddNewSlot = () => {
    const { user }  = useAuth()
    return (
        <div>
            <h1 className="text-center font-bold underline text-2xl my-10">My Profile</h1>
            <div className="flex justify-center items-center">
                <div className="w-[500px] border-2 border-gray-100 shadow p-5 font-semibold ">
                    <div className="flex justify-center my-5">
                        <img className="w-32" src={user?.photoURL} alt="" />
                    </div>
                    <h1>Name : {user?.displayName}</h1>
                    <h1>Email  : {user?.email}</h1>
                    <h1>Account Created at: {user?.metadata?.creationTime}</h1>
                    <h1>Last signin time: {user?.metadata?.lastSignInTime}</h1>
                </div>
            </div>
        </div>
    );
};

export default AddNewSlot;
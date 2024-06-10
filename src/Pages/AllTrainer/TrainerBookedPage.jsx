import { Link, useLoaderData, useLocation } from "react-router-dom";
// import useAuth from "../../Hooks/useAuth";
import { useState } from "react";


const TrainerBookedPage = () => {

    const [radioValue, setRadioValue] = useState(10);
    let price = parseInt(radioValue);
    const trainer = useLoaderData();
    const location = useLocation();
    const TrainerName = trainer?.name;
    const TrainerEmail = trainer?.email;
    const slot = location?.state?.day;
    const classes = location?.state?.classes
    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse'
    };

    const thTdStyle = {
        border: '1px solid black',
        padding: '10px',
        textAlign: 'left'
    };

    const thStyle = {
        ...thTdStyle,
        backgroundColor: '#f2f2f2'
    };
    const responsiveTableContainer = {
        overflowX: 'auto'
    };

    return (
        <div className="flex flex-col">
            <h1 className="text-3xl font-bold uppercase underline text-center mt-10">Trainer Booked Page!</h1>
            <div className="w-[500px] flex flex-col space-y-3 border my-10 mx-auto p-5 rounded-xl bg-gray-200">
                <form className="space-y-2 border flex flex-col p-3">
                    <label className="font-semibold text-xl mt-3">Trainer Name : {trainer?.name}</label> <br />
                    <label className="font-semibold text-xl my-3">SelectedSlot : {location?.state?.day}</label> <br />
                    <label className="font-semibold text-xl">Classes : {classes}</label> <br />
                    <div className="flex items-center justify-around font-semibold text-xl">
                        <label>Packages: </label>
                        <input required onChange={(e) => setRadioValue(parseInt(e.target.value))} type="radio" name="package" id="basic" value='10' />
                        <label>Basic</label>
                        <input onChange={(e) => setRadioValue(parseInt(e.target.value))} type="radio" name="package" id="standard" value="50" />
                        <label>Standard</label>
                        <input onChange={(e) => setRadioValue(parseInt(e.target.value))} type="radio" name="package" id="premium" value="100" />
                        <label>Premium</label>
                    </div>
                    <div className="flex justify-center items-center">
                        <Link to='/payment' state={{ from: location.pathname, TrainerName, TrainerEmail, slot, classes, price }} className="w-1/2 flex justify-center items-center gap-3 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Join Now</Link>
                    </div>
                </form>
            </div>
            <div style={responsiveTableContainer}>
                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th style={thStyle}>Basic Membership</th>
                            <th style={thStyle}>Standard Membership</th>
                            <th style={thStyle}>Premium Membership</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={thTdStyle}>Access to gym facilities during regular operating hours.</td>
                            <td style={thTdStyle}>All benefits of the basic membership.</td>
                            <td style={thTdStyle}>All benefits of the standard membership.</td>
                        </tr>
                        <tr>
                            <td style={thTdStyle}>Use of cardio and strength training equipment.</td>
                            <td style={thTdStyle}>Access to group fitness classes such as yoga, spinning, and Zumba.</td>
                            <td style={thTdStyle}>Access to personal training sessions with certified trainers.</td>
                        </tr>
                        <tr>
                            <td style={thTdStyle}>Access to locker rooms and showers.</td>
                            <td style={thTdStyle}>Use of additional amenities like a sauna or steam room.</td>
                            <td style={thTdStyle}>Discounts on additional services such as massage therapy or nutrition counseling.</td>
                        </tr>
                        <tr>
                            <td style={thTdStyle}><strong>Price: $10</strong></td>
                            <td style={thTdStyle}><strong>Price: $50</strong></td>
                            <td style={thTdStyle}><strong>Price: $100</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default TrainerBookedPage;
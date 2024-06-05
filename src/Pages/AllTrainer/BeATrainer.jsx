import useAuth from "../../Hooks/useAuth";
import { useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import useAxiosCommon from "../../Hooks/useAxiosCommon";
import Swal from "sweetalert2";

const animatedComponents = makeAnimated();

const options = [
    { value: 'Saturday', label: 'Saturday' },
    { value: 'Sunday', label: 'Sunday' },
    { value: 'Monday', label: 'Monday' },
    { value: 'Tuesday', label: 'Tuesday' },
    { value: 'Wednesday', label: 'Wednesday' },
    { value: 'Thursday', label: 'Thursday' },
    { value: 'Friday', label: 'Friday' }
];
const BeATrainer = () => {
    const axiosCommon = useAxiosCommon();
    const { user } = useAuth()
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleSelect = (selected) => {
        setSelectedOptions(selected);
        // console.log('Selected options:', selected);
    };

    const skills = ['Fitness Knowledge', 'Nutrition Knowledge', 'Communication Skills', 'Technical Skills', 'First Aid and CPR', 'Adaptability and Creativity'];
    const [checkedState, setCheckedState] = useState(
        new Array(skills.length).fill(false)
    );
    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
        // console.log(checkedState);
    }
    // console.log(checkedState);

    const handleApplied = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const age = parseInt(e.target.age.value);
        const photo = e.target.image.value;
        const time = e.target.time.value;
        const experience = parseInt(e.target.experience.value);
        const days = selectedOptions.map(se => se.value);
        const status = 'pending'
        const des = e.target.des.value;
        const selectedSkill = checkedState
            .map((checked, idx) => checked ? skills[idx] : null)
            .filter(skill => skill !== null);
        const user = { name, email, age, photo, days, time, selectedSkill, experience, status, des };
        console.log(user);
        const { data } = await axiosCommon.post('/appliedTrainer',user);
        if (data.insertedId) {
            Swal.fire({
                position: "top",
                icon: "success",
                title: "Your application for the trainer role has been successful.",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    return (
        <div className="max-w-4xl mx-auto border p-5 my-5">
            <h1 className="text-center font-bold text-3xl underline mb-3">Be A Trainer!</h1>
            <form onSubmit={handleApplied}>
                <div className="flex flex-col space-y-5 my-5">
                    <div className="flex justify-between gap-5">
                        <div className="w-1/2 flex flex-col space-y-3">
                            <label className="font-semibold text-xl w-full">Full Name</label>
                            <input className="p-3 border outline-none w-full rounded-xl" type="text" name="name" id="" />
                        </div>
                        <div className="w-1/2 flex flex-col space-y-3">
                            <label className="font-semibold text-xl w-full">Email</label>
                            <input className="p-3 border outline-none w-full rounded-xl" defaultValue={user?.email} readOnly type="email" name="email" id="" />
                        </div>
                    </div>
                    <div className="flex justify-between gap-5">
                        <div className="w-1/2 flex flex-col space-y-3">
                            <label className="font-semibold text-xl w-full">Age</label>
                            <input className="p-3 border outline-none w-full rounded-xl" type="number" name="age" id="" />
                        </div>
                        <div className="w-1/2 flex flex-col space-y-3">
                            <label className="font-semibold text-xl w-full">Photo</label>
                            <input className="p-3 border outline-none w-full rounded-xl" type="text" name="image" id="" />
                        </div>
                    </div>
                    <div className="flex justify-between gap-5">
                        <div className="w-1/2 flex flex-col space-y-3">
                            <label className="font-semibold text-xl w-full" htmlFor="">Available Days</label>
                            <div className='flex'>
                                <Select
                                    onChange={handleSelect}
                                    closeMenuOnSelect={false}
                                    components={animatedComponents}
                                    isMulti
                                    options={options}
                                    value={selectedOptions}
                                />
                            </div>
                        </div>
                        <div className="w-1/2 flex flex-col space-y-3">
                            <label className="font-semibold text-xl w-full">Time</label>
                            <input className="p-3 border outline-none w-full rounded-xl" type="text" name="time" id="" />
                        </div>
                    </div>
                    <div>
                        <label className="font-semibold text-xl w-full my-4">Skills</label>
                        <div className="flex gap-5">
                            {
                                skills.map((skill, idx) =>
                                    <div className="flex justify-center items-center" key={idx}>
                                        <input
                                            type="checkbox"
                                            name={skill}
                                            id={`Custom-checkbox-${idx}`}
                                            value={skill}
                                            checked={checkedState[idx]}
                                            onChange={() => handleOnChange(idx)}
                                        />
                                        <label className="ml-3 font-medium">{skill}</label>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label className="font-semibold text-xl my-4">Experience</label>
                        <input className="p-3 border outline-none w-1/2 rounded-xl" type="number" name="experience" id="" />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-semibold text-xl w-full my-4">Write Something about yourself</label>
                        <textarea name="des" id="" rows={6} className="outline-none border p-3 rounded-xl"></textarea>
                    </div>
                    <div className="flex justify-center items-center">
                        <input className="w-1/2 block text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" type="submit" value="Applied" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default BeATrainer;
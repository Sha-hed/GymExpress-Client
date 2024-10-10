import useAuth from "../../Hooks/useAuth";
import { useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Swal from "sweetalert2";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import { useNavigate } from "react-router-dom";
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
    const navigate = useNavigate();
    const axiosPrivate = useAxiosPrivate()
    const { user } = useAuth()
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleSelect = (selected) => {
        setSelectedOptions(selected);
        // console.log('Selected options:', selected);
    };

    const skills = ['Exercise Physiology', 'Workout Program Design', 'Strength Training', 'Cardiovascular Training', 'Injury Prevention & Rehabilitation', 'Stretching & Mobility'];
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
        const description = e.target.des.value;
        const selectedSkill = checkedState
            .map((checked, idx) => checked ? skills[idx] : null)
            .filter(skill => skill !== null);
        const user = { name, email, age, photo, days, time, selectedSkill, experience, status, description };
        console.log(user);
        const { data } = await axiosPrivate.post('/appliedTrainer', user);
        console.log(data)
        if (data.insertedId) {
            Swal.fire({
                position: "top",
                icon: "success",
                title: "Submission successful! Please wait for admin approval.",
                showConfirmButton: false,
                timer: 1500
            });
            setTimeout(() => {
                navigate('/')
            }, 2000)
        }
    }
    return (
        <div className="pt-20">
            <div className="w-full md:max-w-4xl mx-auto p-5 my-5 text-white rounded-xl dark:border-zinc-700 dark:bg-zinc-900 ">
                <h1 className="text-center font-bold md:text-3xl underline mb-3">Be A Trainer!</h1>
                <form onSubmit={handleApplied}>
                    <div className="flex flex-col space-y-5 my-5">
                        <div className="flex justify-between gap-5">
                            <div className="w-1/2 flex flex-col space-y-3">
                                <label className="font-semibold md:text-xl w-full">Full Name</label>
                                <input className="p-3 border text-black outline-none w-full rounded border-gray-400" type="text" name="name" id="" placeholder="Full Name" />
                            </div>
                            <div className="w-1/2 flex flex-col space-y-3">
                                <label className="font-semibold md:text-xl w-full">Email</label>
                                <input className="text-black p-3 border outline-none w-full rounded" defaultValue={user?.email} readOnly type="email" name="email" id="" />
                            </div>
                        </div>
                        <div className="flex justify-between gap-5">
                            <div className="w-1/2 flex flex-col space-y-3">
                                <label className="font-semibold md:text-xl w-full">Age</label>
                                <input className="text-black p-3 border outline-none w-full rounded" type="number" name="age" id="" placeholder="Enter Age" />
                            </div>
                            <div className="w-1/2 flex flex-col space-y-3">
                                <label className="font-semibold md:text-xl w-full">PhotoURL</label>
                                <input className="text-black p-3 border outline-none w-full rounded" type="text" name="image" id="" placeholder="Enter PhotoURL" />
                            </div>
                        </div>
                        <div className="flex justify-between gap-5">
                            <div className="w-1/2 flex flex-col space-y-3">
                                <label className="font-semibold md:text-xl w-full" htmlFor="">Available Days</label>
                                <div className='flex text-black'>
                                    <Select
                                        onChange={handleSelect}
                                        closeMenuOnSelect={false}
                                        components={animatedComponents}
                                        isMulti
                                        options={options}
                                        value={selectedOptions}
                                        className="w-[400px]"
                                    />
                                </div>
                            </div>
                            <div className="w-1/2 flex flex-col space-y-3">
                                <label className="font-semibold md:text-xl w-full">Time</label>
                                <input className="text-black p-3 border outline-none w-full rounded" type="text" name="time" id="" placeholder="Enter Time"/>
                            </div>
                        </div>

                        <div>
                            <label className="font-semibold md:text-xl w-full my-4">Skills</label>
                            <div className="flex flex-col md:flex-row gap-5 items-start">
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
                            <label className="font-semibold md:text-xl my-4">Experience</label>
                            <input className="text-black p-3 border outline-none w-full md:w-1/2 rounded" type="number" name="experience" id=""  placeholder="Experience"/>
                        </div>
                        <div className="flex flex-col">
                            <label className="font-semibold md:text-xl w-full my-4">Write Something about yourself</label>
                            <textarea name="des" id="" rows={6} className="text-black outline-none border p-3 rounded" placeholder="write about yourself"></textarea>
                        </div>
                        <div className="flex justify-center items-center">
                            <input type="submit" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mt-10 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800" value="Apply" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BeATrainer;
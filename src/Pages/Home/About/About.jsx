import banner from '../../../assets/images/Banner4.jpg'

const About = () => {
    return (
        <div className='my-10 bg-gray-200 p-5 rounded-xl shadow-xl'>
            <h1 className='text-5xl font-medium underline text-center my-10'>About Us</h1>
            <div className='flex gap-5 justify-center items-center'>
                <div className='w-1/2 rounded-lg'>
                    <img src={banner} className='rounded-lg' alt="" />
                </div>
                <div className='w-1/2'>
                    <p className='text-xl'>
                        Welcome to <span className='text-red-600 font-bold'>FitnessClub</span>, where your fitness journey is our top priority. At FitnessClub, we believe in providing a holistic approach to health and wellness, ensuring you have access to everything you need to achieve your fitness goals. Our state-of-the-art facilities, expert trainers, and diverse class offerings make us the premier destination for fitness enthusiasts of all levels
                    </p>
                    <p className='text-xl'>At <span className='text-red-600 font-bold'>FitnessClub</span>, we are committed to creating a supportive and inclusive community. Our mission is to empower you to lead a healthier, happier life. Join us today and experience the difference at FitnessClub – where your fitness is our passion.</p>
                </div>
            </div>
        </div>

    );
};

export default About;
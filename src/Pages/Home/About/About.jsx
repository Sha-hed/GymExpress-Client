import banner from '../../../assets/images/Banner4.jpg'

const About = () => {
    return (
        <div className='my-5'>
        <h1 className='text-6xl font-bold text-center my-5'>About Us</h1>
            <div className='flex justify-center items-center gap-5'>
                <div className='w-1/2 rounded-lg'>
                    <img src={banner} className='rounded-lg' alt="" />
                </div>
                <div className='w-1/2'>
                    <p className='text-xl'>we are at the forefront of revolutionizing the fitness industry. Our dedication lies in providing innovative solutions that empower individuals to lead healthier, more active lifestyles.</p>
                   <br /><br />  <p className='text-xl'> We believe in the transformative power of fitness and aim to make it accessible to everyone. Our platform integrates advanced tools and resources designed to enhance your fitness experience, whether you are a beginner or a seasoned athlete.</p>
                </div>
            </div>
        </div>

    );
};

export default About;
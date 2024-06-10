
import About from '../About/About';
import Featured from '../Featured/Featured';
import NewsLetter from '../NewsLetter/NewsLetter';
import Team from '../Team/Team';
import Testimonial from '../TestiMonial/Testimonial';
import './Home.css'
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div>
            <div className='min-h-screen home opacity-90 flex flex-col space-y-3 justify-center items-center bg-no-repeat w-full'>
                <h1 className='text-4xl w-1/2 text-white font-bold text-center'>Empower Your Health, Energize Your Life – Join FitnessClub Today!</h1>
                <Link to='/allClasses' type="button" className=" block text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">See Classes</Link>
            </div>
            <Featured></Featured>
            <Testimonial ></Testimonial>
            <About></About>
            <NewsLetter></NewsLetter>
            <Team></Team>

        </div>
    );
};

export default Home;
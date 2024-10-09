import BannerImage from '../../../assets/images2/B1.jpg'
import About from '../About/About';
import Featured from '../Featured/Featured';
import NewsLetter from '../NewsLetter/NewsLetter';
import Letter from '../NewsLetter/Letter';
import Team from '../Team/Team';
import Testimonial from '../TestiMonial/Testimonial';
import './Home.css'
import { Link } from "react-router-dom";
import WeOffer from './WeOffer';
import Marque from '../NewsLetter/Marque';
import BeaTrainer from '../Featured/BeaTrainer';
import Blog from '../../Blog/Blog';
import Intro from './Intro';
const Home = () => {
    return (
        <div>
            <div className=''>
                <img className='' src={BannerImage} alt="" />
            </div>
            <div className="absolute top-1/2 left-[100px] text-center">
                <h1 className="text-7xl font-bold text-white mb-5">Ultimate <br /> Crossfit <br /> Facility</h1>
                
                {/* <Link to='/allClasses' type="button" className=" text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">See Classes</Link> */}
            </div>
            <WeOffer />
            <Intro/>
            {/* <Featured></Featured> */}
            <Marque />
            <BeaTrainer />
            <Blog />
            <Testimonial ></Testimonial>
            <Marque />
            {/* Be a Trainer Section */}
            {/* <About></About> */}
            {/* <NewsLetter></NewsLetter> */}
            {/* <Team></Team> */}
            <Letter />
        </div>
    );
};

export default Home;
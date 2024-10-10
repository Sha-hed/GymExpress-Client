import BannerImage from '../../../assets/images2/B1.jpg'
import Letter from '../NewsLetter/Letter';
import Testimonial from '../TestiMonial/Testimonial';
import './Home.css'
import WeOffer from './WeOffer';
import Marque from '../NewsLetter/Marque';
import BeaTrainer from '../Featured/BeaTrainer';
import Blog from '../../Blog/Blog';
import Intro from './Intro';
import { Helmet } from 'react-helmet-async';
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>GymExpress | Home</title>
            </Helmet>
            <div className=''>
                <img className='' src={BannerImage} alt="" />
            </div>
            <div className="absolute top-[95px] md:top-1/2 left-[20px] md:left-[100px] text-center">
                <h1 className="text-sm md:text-7xl font-bold text-white mb-5">Ultimate <br /> Crossfit <br /> Facility</h1>
            </div>
            <WeOffer />
            <Intro />
            <Marque />
            <BeaTrainer />
            <Blog />
            <Testimonial ></Testimonial>
            <Marque />
            <Letter />
        </div>
    );
};

export default Home;
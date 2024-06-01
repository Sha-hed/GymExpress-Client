
import About from '../About/About';
import Featured from '../Featured/Featured';
import NewsLetter from '../NewsLetter/NewsLetter';
import './Home.css'
const Home = () => {
    return (
        <div>
            <div className='min-h-screen home bg-fixed opacity-90 flex flex-col space-y-3 justify-center items-center'>
                <h1 className='text-4xl w-1/2 text-white font-bold text-center'>Empower Your Health, Energize Your Life – Join FitnessClub Today!</h1>
                <button className='btn btn-success'>See Classes</button>
            </div>
            <Featured></Featured>
            <About></About>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;
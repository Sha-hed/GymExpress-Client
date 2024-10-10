import Man from '../assets/images/profile.png'
import quote from '../assets/images2/quote.png'
import { Rating } from '@smastrom/react-rating'


import '@smastrom/react-rating/style.css'
const ReviewCard = ({ reviews }) => {
    const  { userName, review, photoURL } = reviews
    return (
        <div className='bg-[#1E1E1E]'>
            <div className='text-white h-[550px] px-3 py-20 flex flex-col items-center space-y-3 shadow-xl mx-10'>
                <div className='w-24 h-[150px]'>
                    <img className='' src={photoURL} alt="" />
                    <div className='mt-2'>
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={5}
                            readOnly
                        />
                    </div>
                </div>
                <div className='w-full md:w-1/2 text-sm md:text-xl h-[200px]'>
                    <p>{review}</p>
                </div>
                <div className='w-12'>
                    <img src={quote} alt="" />
                </div>
                <div>
                    <h1>{userName}</h1>
                </div>

            </div>
        </div>
    );
};

export default ReviewCard;
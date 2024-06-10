import Man from '../assets/images/profile.png'
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
const ReviewCard = ({ review }) => {
    return (
        <div className='px-3 py-10 flex flex-col justify-center items-center space-y-3 border shadow-xl bg-gray-200'>
            <div className='w-12'>
                <img src={Man} alt="" />
            </div>
            <div>
                <Rating
                    style={{ maxWidth: 100 }}
                    value={review?.rating}
                    readOnly
                />
            </div>
            <div>
                <p>{review?.review}</p>
            </div>

        </div>
    );
};

export default ReviewCard;
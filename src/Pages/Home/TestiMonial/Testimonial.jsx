
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

//CSS For Swiper 
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import useAxiosCommon from '../../../Hooks/useAxiosCommon';
import { useQuery } from '@tanstack/react-query';
import ReviewCard from '../../../components/ReviewCard';
const Testimonial = () => {
    const axiosCommon = useAxiosCommon();
    const { data: reviews } = useQuery({
        queryKey: ['review'],
        queryFn: async () => {
            const { data } = await axiosCommon.get('/get-review')
            return data;
        }
    })
    return (
        <>
            <h1 className='text-center underline font-bold text-3xl'>Reviews</h1>
            <div className='mb-5'>
                <Swiper
                   slidesPerView={1}
                   spaceBetween={30}
                   loop={true}
                   pagination={{
                     clickable: true,
                   }}
                   navigation={true}
                   modules={[Pagination, Navigation]}
                   className=""
                >
                    {
                        reviews?.map(review =>
                            <SwiperSlide key={review._id}
                            >
                                <ReviewCard review={review}></ReviewCard>
                            </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </>
    );
};

export default Testimonial;
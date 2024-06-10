
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
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
            <h1 className='text-center underline font-bold text-3xl mt-10'>Reviews</h1>
            <div className='my-5'>
                <Swiper
                    loop={true}
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    {
                        reviews?.map(review =>
                            <SwiperSlide key={review._id}>
                                <ReviewCard review={review}></ReviewCard>
                            </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </>
    );
};

export default Testimonial;
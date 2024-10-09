
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

//CSS For Swiper 
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { useQuery } from '@tanstack/react-query';
import ReviewCard from '../../../components/ReviewCard';
import useAxiosGeneral from '../../../Hooks/useAxiosGeneral';
const Testimonial = () => {
    const axiosGeneral = useAxiosGeneral()
    const { data: reviews = [] } = useQuery({
        queryKey: ['review'],
        queryFn: async () => {
            const { data } = await axiosGeneral.get('/review')
            return data;
        }
    })
    return (
        <>

            <div className='mb-5'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    autoplay={{
                        delay: 3000, // Delay between slides in milliseconds (3 seconds)
                        disableOnInteraction: false, // Keeps autoplay running after user interaction
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                    className=""
                >
                    {
                        reviews?.map(review =>
                            <SwiperSlide key={review._id}
                            >
                                <ReviewCard reviews={review}></ReviewCard>
                            </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </>
    );
};

export default Testimonial;
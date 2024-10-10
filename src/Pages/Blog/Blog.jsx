
import { useQuery } from "@tanstack/react-query";
import useAxiosGeneral from "../../Hooks/useAxiosGeneral";
import BlogCard from "./BlogCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import './Blog.css'

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const Blog = () => {

    const axiosGeneral = useAxiosGeneral();
    const { data: blog = [] } = useQuery({
        queryKey: ['blog'],
        queryFn: async () => {
            const { data } = await axiosGeneral.get('/blog')
            return data;
        }
    })

    return (
        <div className="text-white bg-[#0e0e0e] py-5 md:py-32">
            <h1 className="text-sm md:text-[16px] text-center font-bold uppercase my-5 text-gray-200">our blog </h1>
            <h1 className="text-center font-bold text-lg md:text-5xl mb-10">Latest new & updates</h1>
            <div className="w-full md:max-w-7xl mx-auto px-10 md:px-0">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                        bulletClass: 'swiper-pagination-bullet custom-bullet',
                        bulletActiveClass: 'swiper-pagination-bullet-active custom-active-bullet',
                    }}
                    autoplay={{
                        delay: 2000, // Delay between slides in milliseconds (3 seconds)
                        disableOnInteraction: false, // Keeps autoplay running after user interaction
                    }}
                    loop={true}
                    breakpoints={{
                        // When the viewport width is <= 640px (mobile)
                        320: {
                            slidesPerView: 1, // 1 slide per view on mobile
                            spaceBetween: 20, // Adjust space between slides if necessary
                        },
                        // When the viewport width is <= 768px (tablet)
                        768: {
                            slidesPerView: 2, // 2 slides per view on tablet
                            spaceBetween: 30,
                        },
                        // When the viewport width is <= 1024px (small desktops)
                        1024: {
                            slidesPerView: 3, // 3 slides per view on small desktops
                            spaceBetween: 30,
                        },
                        1100: {
                            slidesPerView: 4, // 3 slides per view on small desktops
                            spaceBetween: 30,   
                        }
                    }}
                    modules={[FreeMode, Pagination, Autoplay]}
                    className="mySwiper h-[350px]"
                >
                    {
                        blog?.map((blog, id) => <SwiperSlide key={id}>
                            <BlogCard blog={blog}></BlogCard>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Blog;
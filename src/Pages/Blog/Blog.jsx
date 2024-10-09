
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
    console.log('Blog Ashche kina dektesi ', blog)

    return (
        <div className="text-white bg-[#0e0e0e] py-32">
            <h1 className="text-center font-bold uppercase my-5 text-gray-200">our blog </h1>
            <h1 className="text-center font-bold text-5xl mb-10">Latest new & updates</h1>
            {/* <div className="flex justify-center items-center my-10">
                <button className="p-3 bg-sky-400 rounded-xl">VerifyMeeee</button>
            </div> */}
            {/* <div>
                {
                    blog?.map((blog,id)=><BlogCard key={id} blog={blog}></BlogCard>)
                }
            </div> */}
            <div className="max-w-7xl mx-auto">
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
                    modules={[FreeMode, Pagination, Autoplay]}
                    className="mySwiper h-[350px]"
                >

                    {
                        blog?.map((blog, id) => <SwiperSlide key={id}>
                            <BlogCard blog={blog}></BlogCard>
                        </SwiperSlide>)
                    }


                    {/* <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide> */}
                </Swiper>
            </div>
        </div>
    );
};

export default Blog;
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';


const Category = () => {
    return (
        <section>
            <SectionTitle subHeading={"From 11.00am to 10.00pm"} heading={"ORDER ONLINE"}></SectionTitle>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img className='mx-auto' src={slide1} alt="" />
                    <h3 className='text-white text-center text-[32px] -m-16'>SALADS</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='mx-auto' src={slide2} alt="" />
                    <h3 className='text-white text-center text-[32px] -m-16'>PIZZAS</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='mx-auto' src={slide3} alt="" />
                    <h3 className='text-white text-center text-[32px] -m-16'>SOUPS</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='mx-auto' src={slide4} alt="" />
                    <h3 className='text-white text-center text-[32px] -m-16'>DESERT</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='mx-auto' src={slide5} alt="" />
                    <h3 className='text-white text-center text-[32px] -mt-16'>SALADS</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;
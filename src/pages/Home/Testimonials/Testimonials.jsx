import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonials = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <section className="p-20">
            <SectionTitle subHeading="What Our Clients Say" heading="TESTIMONIALS"></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper mt-10">
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="text-center p-20 space-y-5">
                            <Rating className="mx-auto"
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className="text-xl text-neutral-900">{review.details}</p>
                            <h3 className="text-3xl text-[#CD9003] font-medium">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;
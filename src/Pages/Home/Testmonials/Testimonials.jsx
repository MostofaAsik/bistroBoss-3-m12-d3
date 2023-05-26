import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'


const Testimonials = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {

                setReviews(data)
            })
    }, [])


    return (
        <section className='my-20'>
            <SectionTitle
                heading={"Testimonials"}
                subHeading={"What our client say"}
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className='flex flex-col items-center mx-24 my-20'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p>{review.details}</p>
                            <h2 className='text-3xl text-indigo-700'>{review.name}</h2>
                        </div>

                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;
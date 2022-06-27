import React, { useState } from "react";
import feedback1 from "../Assets/Images/feedback1.png";
import feedback2 from "../Assets/Images/feedback2.png";
import feedback3 from "../Assets/Images/feedback3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import TestimonialCard1 from "../Components/TestimonialCard1";

function Testimonials() {
  return (
    <section className="bg-gray-100 pt-20 pb-20">
      <div className="w-full">
        <div className="w-full text-center flex flex-col items-center">
          <h2 className="lg:w-1/2 leading-tight w-full text-4xl font-bold pb-5">
            What Our Clients Said About
            <p className="text-red-500">Street View Spectator</p>
          </h2>
        </div>

        {/* CAROUSEL  */}
        <div className="w-full bg-gray-100 flex justify-center md:pt-5">
          <div className="w-full md:block hidden md:w-11/12 h-[430px] bg-gray-100 relative ">
            <Swiper
              slidesPerView={1}
              spaceBetween={80}
              loop={true}
              navigation={false}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
              }}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              grabCursor={true}
              modules={[Pagination, Navigation, Autoplay]}
              className="mySwiper flex items-end w-full h-full bg-gray-100 "
            >
              <SwiperSlide className="flex bg-gray-100 items-end rounded-md pb-10 justify-end">
                <img
                  className=" absolute bottom-10 -left-0 z-20"
                  src={feedback1}
                  alt=""
                />
                <TestimonialCard1 />
              </SwiperSlide>

              <SwiperSlide className="flex bg-gray-100 items-end rounded-md pb-10 justify-end">
                <img
                  className=" absolute bottom-10 -left-0 z-20"
                  src={feedback2}
                  alt=""
                />
                <TestimonialCard1 />
              </SwiperSlide>

              <SwiperSlide className="flex bg-gray-100 items-end rounded-md pb-10 justify-end">
                <img
                  className=" absolute bottom-10 -left-0 z-20"
                  src={feedback3}
                  alt=""
                />
                <TestimonialCard1 />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        {/* CAROUSEL FOR MOBILE  */}
        <div className="w-full md:hidden md:w-[500px] lg:w-[750px] h-full mx-auto relative">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            grabCursor={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper bg-white w-full h-full "
          >
            <SwiperSlide className="flex items-center rounded-md pb-10 justify-center">
              <TestimonialCard1 />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

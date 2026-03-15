import React, {useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaChevronRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { testimonialData } from '../constants/Testimonial';

 function Testimonial() {

    const [isBeginning , setIsBeginning] = useState(true);
    const[isEnd , setIsEnd] = useState(false);
    
    const breakpointsResponsive = {
  0: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 10,
  },
  1280: {
    slidesPerView: 4,
    spaceBetween: 30,
  },
};


     const handleSwiperEvents = (swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd)
        }
  return (
    <div className='w-full h-full space-y-5 realtive lg:px-24 md:px-16 sm:px-7 px-4 flex items-center justify-center flex-col'>
        <div className='w-full flex items-center justify-between mt-6'>
                <h2 className='text-2xl text-black font-semibold mx-10 '>
                   <h2 className='text-3xl text-yellow-400'>Customers Review</h2>
                    <div className='text-amber-900'>A community of 1,000+ regulars who trust us for every meal</div>
                </h2>   

                {/* Custom Button */}
                <div className="flex items-center gap-6">
                    <button className=
                    {`custom-prev text-neutral-50 p-2  z-10 ${isBeginning ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled = {isBeginning}
                    >
                    {/* <FaChevronRight size={20}/> */}
                    </button>

                    <button className=
                    {`custom-next  p-2  z-10 ${isBeginning ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled = {isEnd}
                    >
                    </button>
                </div>

        </div> 

    <div className='w-full py-2'>
            {/* <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={breakpointsResponsive}
        onInit={(swiper)=handleSwiperEvents(swiper)}
        onSlideChange={(swiper) => handleSwiperEvents(swiper)}
        modules={[Navigation]}
        className="mySwiper p-1 "
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}

      <Swiper
  slidesPerView={1}
  spaceBetween={10}
  navigation
  breakpoints={breakpointsResponsive}
  onInit={(swiper) => handleSwiperEvents(swiper)}
  onSlideChange={(swiper) => handleSwiperEvents(swiper)}
  modules={[Navigation]}
  className="mySwiper p-1"
>

    {/* testimonial */}
    {testimonialData.map((item) =>(
        <SwiperSlide key={item.id}>
            <div className="w-full h-auto 
            p-6 space-y-10 
            group bg-neutral-800/70">

            <p className='text-neutral-300 text-base 
            font-normal'>
                {item.desc}
            </p>

            <div className='w-full flex items-center justify-between'>
                <div className='flex items-center gap-3 '>
                    <img src= {item.img} alt= {item.name} className="w-12 h-12 object-center object-cover rounded-full border outline-yellow-400 outline-double"/>
                </div>

                <div className='space-y-1'>
                    <p className="text-yellow-400 text-base font-semibold ">
                        {item.name}
                    </p>
                </div>

                 {/* Rating By the Customers */}
            <div className='flex items-center 
            gap-1 bg-yellow-500/5 rounded-full px-2 py-1'>

              <FaStar className='text-yellow-600 text-sm '/>
              <p className='text-xs text-yellow-600 '>
                {item.rating}
              </p>
            </div>


            </div>

           
            </div>
        </SwiperSlide>
    ))}

</Swiper>

        </div>
    </div>
  )
}

export default Testimonial
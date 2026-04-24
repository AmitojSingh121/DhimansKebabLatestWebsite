import React, {useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { testimonialData } from "../constants/Testimonial";
import { useTranslation } from "react-i18next";

function Testimonial() {
  const breakpoints = {
    0: { slidesPerView: 1, spaceBetween: 16 },
    640: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 3, spaceBetween: 24 },
  };
  const {t} = useTranslation();
  return (
    <section className="bg-[#0d0d0d] py-20 px-6 md:px-16 border-t border-[#c9a84c]/10">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-[#c9a84c] text-[10px] tracking-[4px] uppercase mb-3">
          {t("Whatpeoplesay")}
        </p>
        <h2 className="font-playfair text-[#f5f0e8] text-3xl md:text-4xl mb-2">
         {t("Customerreviews")}
        </h2>
        <p className="text-[#f5f0e8]/30 text-sm mt-3">
         {t("Community")}
        </p>
        <div className="flex items-center justify-center gap-4 mt-5">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#c9a84c]/40" />
          <span className="text-[#c9a84c] text-sm">✦</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#c9a84c]/40" />
        </div>
      </div>

      {/* Swiper */}
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={breakpoints}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Navigation, Autoplay]}
        className="pb-4"
      >
        {testimonialData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-[#141414] border border-[#2a2a2a] hover:border-[#c9a84c]/20 p-6 space-y-6 transition-all duration-300 h-full">
              {/* Quote */}
              <div className="text-[#c9a84c]/20 text-5xl font-playfair leading-none">"</div>
              <p className="text-[#f5f0e8]/60 text-sm leading-relaxed -mt-4">
                {item.desc}
              </p>

              {/* Author */}
              <div className="flex items-center justify-between border-t border-[#2a2a2a] pt-4">
                <div className="flex items-center gap-3">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover ring-1 ring-[#c9a84c]/30"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div
                    className="w-10 h-10 rounded-full bg-[#c9a84c]/20 items-center justify-center text-[#c9a84c] font-semibold text-sm hidden">
                    {item.name.charAt(0)}
                  </div>
                  <p className="text-[#f5f0e8] text-sm font-medium">{item.name}</p>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-xs ${i < Math.floor(item.rating) ? "text-[#c9a84c]" : "text-[#2a2a2a]"}`}
                    />
                  ))}
                  <span className="text-[#c9a84c] text-xs ml-1">{item.rating}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonial;
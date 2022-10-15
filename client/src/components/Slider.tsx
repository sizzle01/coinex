import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import Link from "next/link";

interface SliderProps {}

const items = [
  {
    image: <Image src="/slider1.png" alt="atm" height={400} width={500} />,
    name: "Manage your digital asset",
    description:
      "Our App helps to you store, organize, find, retrieve your digital asset",
  },
  {
    image: <Image src="/slider3.png" alt="atm" height={400} width={500} />,
    name: "Grow your Funds",
    description:
      "If you are wondering how to earn more money with your cryptocurrency , look no further! this is the best platform for you",
  },
  {
    image: <Image src="/slider2.png" alt="atm" height={400} width={500} />,
    name: "Pay anywhere, anytime",
    description:
      "We offer incredibly fast payment solutions for you and your business. make payments at ease anyhwere anytime",
  },
];
const Slider: React.FC<SliderProps> = () => {
  return (
    <div className="h-[100vh] w-full">
      <Swiper
        navigation
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        spaceBetween={0}
        slidesPerView={1}
        className="h-[100vh] w-full"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="h-[100vh] flex flex-col w-full  justify-center items-center"
          >
            <SwiperSlide className="h-screen flex flex-col w-full  justify-center items-center bg-blue-gradient">
              <div className=" w-full flex flex-col justify-center items-center">
                <div className="">{item.image}</div>

                <div className="mt-[-20px] font-semibold text-center text-xl text-white">
                  {item.name}
                </div>
                <div className=" text-base text-center text-white px-5">
                  {item.description}
                </div>
                <p
                  className={`${
                    index === 2 ? "hidden" : ""
                  } text-white text-xl mt-10`}
                >
                  <Link href="welcome"> skip</Link>
                </p>
                <Link href="welcome">
                  <button
                    type="button"
                    className={`${
                      index === 2 ? "" : "hidden"
                    } mt-10 text-white w-[50%] md:w-[20%] mt-2 border-[1px] p-2 border-white hover:bg-[#3d4f7c] rounded-full cursor-pointer`}
                  >
                    Continue
                  </button>
                </Link>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;

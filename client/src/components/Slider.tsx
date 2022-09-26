import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Image from "next/image";
interface SliderProps {}

const items = [
  {
    image: <img src="/slider2.png" alt="atm" />,
    name: "Manage your digital asset",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
  },
  {
    image: <img src="/slider2.png" alt="atm" />,
    name: "Grow your Funds",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
  },
  {
    image: <img src="/slider2.png" alt="atm" />,
    name: "Pay anywhere, anytime",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
  },
];
const Slider: React.FC<SliderProps> = () => {
  return (
    <div className="h-[100vh] w-full">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSwiper={(swiper) => console.log(swiper)}
        className="h-[100vh] w-full"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="h-[100vh] flex flex-col w-full  justify-center items-center  "
          >
            <SwiperSlide className="h-screen flex flex-col w-full  justify-center items-center bg-gradient-to-r from-purple-600 via-pink-600 to-blue-500 ">
              <div className=" w-full flex flex-col w-full  justify-center items-center">
                <div className="h-[500px] w-[500px]">{item.image}</div>

                <div className="text-center text-xl text-white">
                  {item.name}
                </div>
                <div className=" text-base text-center text-white px-5">
                  {item.description}
                </div>
                <button
                  type="button"
                  className="text-white w-[50%] md:w-[20%] mt-2 border-[1px] p-2 border-white hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                >
                  Continue
                </button>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;

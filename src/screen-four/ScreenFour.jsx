import React, { useRef, useState } from 'react';
import useScreenSize from '../hooks/useScreenSize';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import ourgame from '../assets/our_game.png'
import gameOne from "../assets/mobile/Mobile_gameOne.png"
import gameTwo from "../assets/mobile/Mobile_gameTwo.png"
import gameThree from "../assets/mobile/Mobile_gameThree.png"
import gameFour from "../assets/1.png"
import gameFive from "../assets/2.png"
import gameSix from "../assets/3.png"
import gameSeven from "../assets/4.png"
import gameEight from "../assets/5.png"
import gameNine from "../assets/6.png"
import gameTen from "../assets/7.png"
import gameEleven from "../assets/8.png"


const ScreenFour = () => {
    const screenSize = useScreenSize()
    return (
        <div className='screenfour md:px-24 px-2'>
            <h2 className='text-5xl font-semibold text-center py-8'>Our Games</h2>
            {screenSize<="600"?<Swiper
             autoplay={{
                delay: 2500,
              }}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Autoplay, Navigation, Pagination]}
        className="mySwiper pb-8"
      >
        <SwiperSlide>
            <div>
            <img src={gameOne} alt="" className='w-full'/>
            <img src={gameTwo} alt="" className='w-full'/>
            <img src={gameThree} alt="" className='w-full'/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <img src={gameFour} alt="" />
        <img src={gameFive} alt="" />
        <img src={gameSix} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={gameSeven} alt="" />
        <img src={gameEight} alt="" />
        <img src={gameNine} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={gameTen} alt="" />
        <img src={gameEleven} alt="" />
        <img src={gameFour} alt="" />
        </SwiperSlide>
      </Swiper>:<Swiper
             autoplay={{
                delay: 2500,
              }}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Autoplay, Navigation, Pagination]}
        className="mySwiper pb-4"
      >
        <SwiperSlide>
            <div>
            <img src={ourgame} alt="" className='w-full max-h-[837px]'/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <img src={gameFive} alt="" className='w-full max-h-[837px]'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={gameFour} alt="" className='w-full max-h-[837px]'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={gameFive} alt="" className='w-full max-h-[837px]'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={gameSix} alt="" className='w-full max-h-[837px]'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={gameSeven} alt="" className='w-full max-h-[837px]'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={gameEight} alt="" className='w-full max-h-[837px]'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={gameNine} alt="" className='w-full max-h-[837px]'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={gameTen} alt="" className='w-full max-h-[837px]'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={gameEleven} alt="" className='w-full max-h-[837px]'/>
        </SwiperSlide>
      </Swiper>}
        </div>
    );
};

export default ScreenFour;
import React from 'react';
import frame from "./../assets/mobile/mobile_frame.png"
import bg from "./../assets/mobile/mobile_bg.png"
import useScreenSize from '../hooks/useScreenSize';

const SwiperFrame = (props) => {
    const screenSize = useScreenSize()
    return (
        <div className='relative'>
                        <img src={bg} alt="" />
                        <img src={frame} alt="" className={screenSize=="390"?'absolute top-2 p-3 mb-4 left-2':'absolute top-0 p-3 mb-4 left-0'} />
                        <div className='absolute top-10 left-0 right-0 px-8 text-white text-center'>
                            <h4 className={screenSize=="390"?'text-base font-semibold py-3':'text-base font-semibold pb-3'}>{props.heading}</h4>
                            <p className={screenSize=="390"?'text-[14px] leading-[22px] px-4':'text-[12px] leading-[18px] '}>{props.content}</p>
                        </div>
                        </div>
    );
};

export default SwiperFrame;
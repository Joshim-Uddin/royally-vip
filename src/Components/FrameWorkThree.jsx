import React from 'react';
import frame from "./../assets/frameThree.png"
import bg from "./../assets/frameBgThree.png"
import border from "./../assets/shadowOne.png"
import useScreenSize from '../hooks/useScreenSize';

const FrameWorkThree = (props) => {
    const screenSize = useScreenSize()
    return (
        <div className='relative max-[600px]:mx-2 mx-0'>
            <div className='relative'>
            <img src={border} alt="" />
            <img src={bg} alt="" className='absolute top-4 p-2' />
            <img src={frame} alt="" className='absolute top-5 p-4'/>
            </div>
            <div className={screenSize<="389"?'absolute top-0 text-white text-center pt-32':'absolute 2xl:top-10 top-0 left-0 text-white text-center 2xl:pt-20 xl:pt-16 pt-32 pr-4'}>
                <img src={props.icon} alt="" className='mx-auto max-h-[40px]' />
                <h4 className={screenSize<="389"?'text-2xl text-center font-semibold py-4 px-14':'2xl:text-3xl text-2xl text-center font-semibold py-4 2xl:px-3 px-8 xl:w-full w-3/4 mx-auto'}>{props.heading}</h4>
                <p className='2xl:text-lg text-[11px] leading-6 xl:px-8 2xl:px-10  px-14 -ms-8 md:ms-0'>{props.para}</p>
            </div>
        </div>
    );
};

export default FrameWorkThree;
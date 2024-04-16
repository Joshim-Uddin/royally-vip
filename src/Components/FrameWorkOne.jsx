import React from 'react';
import frame from "./../assets/frameOne.png"
import bg from "./../assets/frameBgOne.png"


const FrameWorkOne = (props) => {
    return (
        <div className='relative'>
            <div className='relative'>
            <img src={bg} alt="" />
            <img src={frame} alt="" className='absolute top-2 left-2 p-2 pr-6'/>
            </div>
            <div className='absolute top-10 2xl:left-4 left-1 px-1 text-white'>
                <h4 className='2xl:text-2xl xl:text-lg text-lg text-center 2xl:py-4'>{props.heading}</h4>
                <p className='2xl:text-sm xl:text-[12px] text-[0.65rem] 2xl:leading-6 xl:leading-4 xl:pt-2 2xl:px-14 xl:px-8'>{props.para}</p>
            </div>
        </div>
    );
};

export default FrameWorkOne;
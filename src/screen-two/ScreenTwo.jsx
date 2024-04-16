import React from 'react';
import impor from "./.././assets/import.png"
import silver from "./.././assets/3dsilver.png"
import samsung from "./../assets/Samsung _Galaxy_S22.png"
import useScreenSize from '../hooks/useScreenSize';
const ScreenTwo = () => {
    const screenSize = useScreenSize()
    return (
        <div className='md:flex items-center justify-between gap-1 md:ps-[100px] screentwo'>
            <div className='md:w-3/4 2xl:w-1/2 max-[600px]:w-full max-[600]:px-3'>
                <h2 className='2xl:text-4xl 2xl:pr-16 pr-5 text-3xl font-semibold mb-[10px] text-center'>Play RoyallyRummy Online Now!</h2>
                <p className='text-[16px] leading-10 mb-10 text-center'>
                Download our RoyallyRummy for safe and responsible gaming anytime, anywhere. It’s a subsidiary of RoyallyRummy. Start playing now!
                </p>
                <a href="https://ossmm02.ersfdokm.com/RoyallyRummy-APK/royallyrummy-channel-30772988.apk">
                <div className='w-64 mx-auto relative'>
                <button className='flex gap-[10px] py-[18px] px-[29px]'><span><img src={impor} alt="import icon" /></span> DOWNLOAD APP</button>
                <img src={silver} alt="" className='absolute top-0 -z-10'/>
                </div>
                </a>
            </div>
            <div>
                <img src={samsung} alt="image of samsung galaxy s22" className={screenSize<='600'?'w-full py-14':'w-full py-4'} />
            </div>
        </div>
    );
};

export default ScreenTwo;
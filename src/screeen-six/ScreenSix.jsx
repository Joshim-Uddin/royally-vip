import React from 'react';
import useScreenSize from '../hooks/useScreenSize';
import screenBg from "./../assets/5_screen_background.png"
import mobileScreenBg from "./../assets/mobile/mobile_5 screen background.png"
import golden from "./../assets/golden.png"
import impor from "./../assets/import.png"

const ScreenSix = () => {
    const screenSize = useScreenSize()
    return (
        <div className='relative screensix'>
            <img src={screenSize<="600"?mobileScreenBg:screenBg} alt="" />
            <div className={screenSize<="600"?'absolute top-[23%] text-white mx-4 bg-gradient-to-b from-[#211f1f] to-[#424141] rounded-[10px] p-4':'absolute 2xl:top-60 top-36 w-[600px] ps-[100px] text-white'}>
                <h2 className='md:text-4xl text-2xl font-semibold'>Play RoyallyRummy Online Now!</h2>
                <p className='2xl:text-xl md:text-lg text-sm p-2 leading-10 opacity-50 mt-4'>Download our RoyallyRummy for safe and responsible gaming anytime, anywhere. It’s a subsidiary of RoyallyRummy. Start playing now!</p>
                <a href="https://ossmm02.ersfdokm.com/RoyallyRummy-APK/royallyrummy-channel-30772988.apk">
                <button className='md:-ml-[100px]  -mt-7 w-full'>
                    <img src={golden} alt="" className='w-full mx-auto' />
                </button>
                </a>
            </div>
        </div>
    );
};

export default ScreenSix;
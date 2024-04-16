import React from 'react';
import screenOne from "../assets/section_one_bg.png"
import mobileScreenOne from "../assets/mobile/mobile_1screen_background.png"
import Navbar from '../Components/Navbar';
import bonus from "./../assets/bonus.png"
import mobileBonus from "../assets/mobile/mobile_bonus.png"
import android from "./../assets/android_download.png"
import ios from "./../assets/ios_download.png"
import model from "./../assets/hug.png"
import useScreenSize from '../hooks/useScreenSize';

const ScreenOne = () => {
    const screenSize = useScreenSize()
    return (
        <div className='screenone relative'>
            <div className='absolute left-0 right-0 z-10'>
            <Navbar />
            </div>
            <img src={screenSize<='600'?mobileScreenOne:screenOne} alt="image of screen one" className='w-full mobile-bg' />
            <div className={screenSize<='600'?'absolute z-10 2xl:top-[140px] top-[110px]':'absolute 2xl:top-[140px] top-[110px] w-[50%] left-16'}>
            <img src={screenSize<='600'?mobileBonus:bonus} alt="bonus image" className={screenSize<='600'?'w-full px-5 mt-7':''}/>
            {screenSize<='600'?<p className='p-[10px] rounded-[10px] bg-gradient-to-r from-[rgba(0,0,0,0.5)] to-[rgba(25,25,25,0.5)] text-white text-[10px] text-center opacity-50 leading-[15px] mt-5 mx-5'>THIS GAME MAY BE HABIT-FORMING OR FINANCIALLY RISKY. PLAY RESPONSIBLY. T&C APPLY</p>:<></>}
            {screenSize<='600'?
            <div className='mt-[72%] flex flex-col gap-0 items-center justify-center'>
                <img src={model} alt="" className='h-16 mx-auto'/>
                <a href="https://ossmm02.ersfdokm.com/RoyallyRummy-APK/royallyrummy-channel-30772988.apk">
                <button className='w-full mx-auto'>
                    <img src={android} alt="android download btn" className='-my-5'/>
                </button>
                </a>
                <a href="https://ossmm02.ersfdokm.com/RoyallyRummy-APK/royallyrummy-channel-30772988.apk">
                <button>
                    <img src={ios} alt="android download btn" className='-my-5'/>
                </button>
                </a>
            </div>:
            <div className='flex items-center justify-center -ml-5 mt-6 2xl:mt-16'>
            <a href="https://ossmm02.ersfdokm.com/RoyallyRummy-APK/royallyrummy-channel-30772988.apk">
            <button className='min-w-[375px]'>
                <img src={android} alt="android download btn" />
            </button>
            </a>
            <img src={model} alt="" className='h-20'/>
            <a href="https://ossmm02.ersfdokm.com/RoyallyRummy-APK/royallyrummy-channel-30772988.apk">
            <button className='min-w-[375px]'>
                <img src={ios} alt="android download btn" />
            </button>
            </a>
        </div>
            }
            </div>
        </div>
    );
};

export default ScreenOne;
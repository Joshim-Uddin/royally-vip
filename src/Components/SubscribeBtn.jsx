import React from 'react';
import useScreenSize from '../hooks/useScreenSize';
import whatsapp from "./../assets/WhatsApp.png"
const SubscribeBtn = () => {
    const screenSize = useScreenSize()
    return (
        <div className='bg-gradient-to-r from-[#1D9300] to-[#0A3400] 2xl:w-[179px] xl:w-[184px] rounded-[10px] md:p-[23px] p-4 flex gap-[5px] text-white'>
            <img src={whatsapp} alt="whatsapp icon" />
            <p className={screenSize<="600"?'text-base hidden':'text-base'}>Subscribe</p>
        </div>
    );
};

export default SubscribeBtn;
import React from 'react';
import useScreenSize from '../hooks/useScreenSize';
import global from './../assets/global.png'

const OfficialSiteBtn = () => {
    const screenSize = useScreenSize()
    return (
        <div className='bg-gradient-to-r from-[#000000] to-[#252525] min-[600px]:w-[193px] rounded-[10px] md:p-[23px] p-4 flex gap-[5px] text-white'>
            <img src={global} alt="global icon" />
            <p className={screenSize<="600"?'text-base hidden':'text-base max-[600px]:hidden'}>Official Site</p>
        </div>
    );
};

export default OfficialSiteBtn;
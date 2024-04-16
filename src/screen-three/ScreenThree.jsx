import React from 'react';
import useScreenSize from '../hooks/useScreenSize';
import screenThree from "./../assets/3_screen_background.png"
import mobileScreenThree from "./../assets/mobile/mobile_3 screen background.png"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FrameWorkThree from '../Components/FrameWorkThree';
import iconOne from "./../assets/directbox-receive.png"
import iconTwo from "./../assets/cup.png"


const ScreenThree = () => {
    const screenSize = useScreenSize()
    const responsive ={
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1
          }
    }
    return (
        <div className='screenthree relative'>
            <img src={screenSize<='600'?mobileScreenThree:screenThree} alt="screen three background image" className='w-full'/>
            {
                screenSize<='600'?
                <div className='absolute top-72 w-full'>
                
                <Carousel responsive={responsive} showDots={true} swipeable={true}>
                <FrameWorkThree heading={"5 Crore + Downloads"} para={"Get ready to enjoy the game trusted by many players online! Download our rummy app now for safe and responsible gaming anytime, anywhere."} icon={iconOne}/>
                <FrameWorkThree heading={"Win Prizes Daily!"} para={"Get ready to enjoy the game trusted by many players online! Download our rummy app now for safe and responsible gaming anytime, anywhere."} icon={iconTwo}/>
                <FrameWorkThree heading={"5 Crore + Downloads"} para={"Get ready to enjoy the game trusted by many players online! Download our rummy app now for safe and responsible gaming anytime, anywhere."} icon={iconOne}/>
</Carousel>
       
      
      </div>
                :
                <div className='absolute top-36 left-16 flex gap-5 lg:w-3/5'>
                <div  className='pt-16'>
                    <FrameWorkThree heading={"5 Crore + Downloads"} para={"Get ready to enjoy the game trusted by many players online! Download our rummy app now for safe and responsible gaming anytime, anywhere."} icon={iconOne}/>
                </div>
                <div className='pt-40'>
                <FrameWorkThree heading={"Win Prizes Daily!"} para={"Get ready to enjoy the game trusted by many players online! Download our rummy app now for safe and responsible gaming anytime, anywhere."} icon={iconTwo}/>
                </div>
                <div><FrameWorkThree heading={"5 Crore + Downloads"} para={"Get ready to enjoy the game trusted by many players online! Download our rummy app now for safe and responsible gaming anytime, anywhere."} icon={iconOne}/></div>
            </div>
            }
        </div>
    );
};

export default ScreenThree;
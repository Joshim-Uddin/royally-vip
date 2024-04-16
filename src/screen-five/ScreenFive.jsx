import React from 'react';


import useScreenSize from '../hooks/useScreenSize';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import FrameWorkOne from '../Components/FrameWorkOne';
import FrameWorkTwo from '../Components/FrameWorkTwo';
import SwiperFrame from '../Components/SwiperFrame';

const ScreenFive = () => {
    const screenSize = useScreenSize()
    const items = [{heading:"About Us | Royallyrummy Indian Rummy Game", content:"Play Rummy, a traditional Indian game, online exclusively at Royally. This platform is excellent for experimenting with the world of online rummy because it provides a wide variety of game versions that support two or six players.India’s Top Online Rummy Platform is Royally. It has been a favorite gaming platform for millions of people for over ten years, and its player base, which now numbers over five crore, is constantly expanding. You can use Rummy Practice to quickly learn the game or you can start a free game of rummy. Take a look at the many perks that are available. Savor the thrilling experience of playing Rummy online whenever and wherever you choose."}, {heading:"Play Responsibly", content:"It’s wonderful to know that the nation has a number of reliable websites that support safe gaming. RoyallyRummy is the most reputable online rummy brand in India among them. The game is kept secure by their special procedures for identifying and removing minors from the game, identifying unfair or dirty play, and continuously warning players against becoming compulsive or obsessive gamers. It is noteworthy that Indian rummy is a skill-based game that is safeguarded by the Indian Constitution. Nonetheless, rummy regulations vary by state, with Andhra Pradesh, Assam, Nagaland, Sikkim, and Telangana having the most."}, {heading:"Is it Legal to Play Online Rummy in India?", content:"The Indian Constitution protects and permits online Indian rummy play. A wide range of game options and a developing player base are provided by RummyStar. Play on the go and give it a try for free! It is noteworthy that Indian rummy is a skill-based game that is safeguarded by the Indian Constitution. Nonetheless, rummy regulations vary by state, with Andhra Pradesh, Assam, Nagaland, Sikkim, and Telangana having the most. Consequently, gamers residing in any of these states are not eligible to use RummyStar’s gaming services. If you’re not in one of these states, though, RummyStar offers a wide range of game options and a vibrant player community that you can enjoy and even play while on the go."}, {heading:"Full Customer Support", content:"When it comes to online rummy gaming, A23 is a trustworthy and dependable platform with excellent customer service. Therefore, it is suggested that people play rummy on the A23 app or website, which has a redressal procedure in place in case a question or problem arises. It’s also beneficial if, during a big event, your digital payments become trapped. A23 provides a committed customer service team that works around-the-clock to assist you and politely handle your inquiries."}]
    return (
        <div className='screenfive min-[600px]:pt-24 min-[600px]:px-24 px-2 pt-4 '>
            <div>
                <h3 className={screenSize<='600'?"text-2xl text-center font-semibold":'text-5xl font-semibold text-center py-3 2xl:px-64 xl:px-28 leading-tight'}>RoyallyRummy Indian Rumy Game. Play Now Win Daily</h3>
                <p className='max-[600px]:text-base max-[600px]:leading-7 text-xl text-center leading-10'>Looking for the best online rummy experience? Look no further than India’s Leading Online Rummy Portal, where over 5 crore+ players are having a great time playing card games! If you’re up for the ultimate challenge, join a heart-thumping game! One of the most played games on the portal is Indian rummy, which offers the thrill of playing traditional Indian rummy online. Best of all, you can play online rummy games whenever and wherever you want!</p>
            </div>
           {
            screenSize<="600"?
            <div>
                <Swiper autoplay={{
                delay: 2500,
              }}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination]}
        className="mySwiper pb-4">
                    {
                        items.map((item, index) =>(
                            <SwiperSlide>
                                <SwiperFrame heading={item.heading} content={item.content}/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            :<div className='flex justify-between gap-5 px-10'>
            <div className='text-white'>
                 <FrameWorkOne heading={"About Us | Royallyrummy Indian Rummy Game"} para={"Play Rummy, a traditional Indian game, online exclusively at Royally. This platform is excellent for experimenting with the world of online rummy because it provides a wide variety of game versions that support two or six players.India&#39s Top Online Rummy Platform is Royally. It has been a favorite gaming platform for millions of people for over ten years, and its player base, which now numbers over five crore, is constantly expanding. You can use Rummy Practice to quickly learn the game or you can start a free game of rummy. Take a look at the many perks that are available. Savor the thrilling experience of playing Rummy online whenever and wherever you choose."}/>
                 
                 <FrameWorkTwo heading={"Play Responsibly"} para={"It’s wonderful to know that the nation has a number of reliable websites that support safe gaming. RoyallyRummy is the most reputable online rummy brand in India among them. The game is kept secure by their special procedures for identifying and removing minors from the game, identifying unfair or dirty play, and continuously warning players against becoming compulsive or obsessive gamers. It is noteworthy that Indian rummy is a skill-based game that is safeguarded by the Indian Constitution. Nonetheless, rummy regulations vary by state, with Andhra Pradesh, Assam, Nagaland, Sikkim, and Telangana having the most."}/>
                 
             </div>
             <div className='2xl:pt-48 pt-32'>
             <div>
             <FrameWorkOne heading={"Is it Legal to Play Online Rummy in India?"} para={"The Indian Constitution protects and permits online Indian rummy play. A wide range of game options and a developing player base are provided by RummyStar. Play on the go and give it a try for free! It is noteworthy that Indian rummy is a skill-based game that is safeguarded by the Indian Constitution. Nonetheless, rummy regulations vary by state, with Andhra Pradesh, Assam, Nagaland, Sikkim, and Telangana having the most. Consequently, gamers residing in any of these states are not eligible to use RummyStar’s gaming services. If you’re not in one of these states, though, RummyStar offers a wide range of game options and a vibrant player community that you can enjoy and even play while on the go."}/>
                 </div>
                 <div>
                 <FrameWorkTwo heading={"Full Customer Support"} para={"When it comes to online rummy gaming, A23 is a trustworthy and dependable platform with excellent customer service. Therefore, it is suggested that people play rummy on the A23 app or website, which has a redressal procedure in place in case a question or problem arises. It’s also beneficial if, during a big event, your digital payments become trapped. A23 provides a committed customer service team that works around-the-clock to assist you and politely handle your inquiries."}/>
                 </div>
             </div>
            </div>
           }
        </div>
    );
};

export default ScreenFive;
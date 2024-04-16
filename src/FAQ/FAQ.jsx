import React, { useState } from 'react';
import 'react-accessible-accordion/dist/fancy-example.css';
import Accordion from '../Components/Accordion';

const FAQ = () => {
    
    const items= [{heading:"Why Play RoyallyRummy?", content:" 1. Delight in entertainment and amusement 2. Promotes skill enhancement 3. Boosts social engagement 4. Receive genuine gold rewards 5. Offering secure and dependable services 6. Various gaming modes"},{heading:"Fair Gameplay", content:"At RoyallyRummy, we guarantee an entirely fair and transparent gaming experience for every player, utilizing a certified random number generator and adhering to a rigorous fair gaming policy."},{heading:"Responsible Playing Behavior", content:"RoyallyRummy, we are committed to creating a safe and responsible gaming environment for our users by implementing age verification, providing self-limitation tools, and promoting healthy gaming habits"}, {heading:"How to Play Indian Rummy on RoyallyRummy?", content:"Learning how to play rummy online is a breeze. You can play Indian rummy on two player tables or six player tables with either a single or two decks of cards. Just sit around the table and take turns picking and discarding cards. You can choose to pick cards from either a closed or open deck, but remember that discarded cards must be placed in the open deck. When playing rummy online, your objective is to arrange the 13 cards you’ve been dealt into sets and sequences. You must make at least two sets – one without a Joker (pure sequence) and the other can use the Joker. The game starts with a toss determining the player who will make the first move. Remember to focus on making a pure sequence first, then the second sequence, followed by other sequences or sets. Have fun playing and always remember to play responsibly!"}, {heading:"How to Deposit and Withdraw?",content:"Extensive Payment Options: We offer a variety of payment methods, such as debit/credit cards, net banking, and UPI payments, providing users with the flexibility to select their preferred payment option for convenience. Ultimate Security Measures: Our payment system employs cutting-edge security technologies to safeguard all financial transactions, ensuring the safety of users' funds and personal information. Privacy Protection: At RoyallyRummy, we prioritize our users' privacy, guaranteeing that all information provided on our platform is securely protected and remains confidential, with no disclosure to third parties."} ]

    return (
        <div className='screenseven py-8'>
            <div className='md:w-1/2 mx-auto px-2'>
            <h2 className='text-center text-4xl font-semibold tracking-wider text-[#212121] mb-6'>Frequent ask qustions</h2>
            <p className='text-xl text-center tracking-wider leading-7 mb-5'>Pellentesque cras adipiscing tempus libero vel nullam mauris tellus. Aliquam ultrices tellus consequat amet, lectus aliquam est in neque.</p>
               <Accordion items={items}/>           
            </div>
        </div>
    );
};

export default FAQ;
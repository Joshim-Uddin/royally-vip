import React from 'react';
import { useState } from 'react';
import plus from "./../assets/add.png"
import minus from "./../assets/minus.png"

const Accordion = ({items}) => {
    const [activeIndex, setActiveIndex] = useState(null)
    const handleItemClick = (index) =>{
        setActiveIndex(index===activeIndex?null:index)
    }
    return (
        <div>
            {
                items.map((item, index)=>(
                    <div key={index}>
                        <div onClick={()=>handleItemClick(index)} className={index===activeIndex?'flex items-center gap-5 py-2 cursor-pointer':'flex items-center gap-5 py-2 cursor-pointer'}>
                            {index===activeIndex?<span><img src={minus} alt="" /></span>:<span><img src={plus} alt="" /></span>}{item.heading}
                        </div>
                        
                        <div className={index===activeIndex?'ps-8 shadow-sm block':"hidden"}>{item.content}</div>
                    </div>
                ))
            }
        </div>
    );
};

export default Accordion;
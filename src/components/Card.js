import React, { useState } from 'react';
import { returnColor } from '../function/functions';


const Card = (props) => {
    const [clicked, setClicked] = useState(false)
   
    return (
        <div  id={props.id} className={'card'+ ' ' +(clicked ? 'clicked': '')} onClick={(e) => {props.getCard(e); props.getIndex(e);  setClicked(true)}}>
                    <div className={"color" +" "+ props.card.color}></div>
                    <span className='point'>{ props.card.point}</span>
                    <div className='cost'>{props.card.cost.map((element, index) => { return <li className={element === 0 ? "hidden" : ""} key={index}><span className={returnColor(index) + " " + index}></span>{element}</li>})}</div>
        </div>
    );
};

export default Card;
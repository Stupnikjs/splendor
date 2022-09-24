import React, { useState } from 'react';


const Card = (props) => {
    const [clicked, setClicked] = useState(false)
    
    return (
        <div  id={props.id} className={'card'+ ' ' +(clicked ? 'clicked': '')} onClick={(e) => {props.getCard(e); setClicked(true)}}>
                    <div className={"color" +" "+ props.card.color}></div>
                    <span className='point'>{ props.card.point}</span>
                    <div className='cost'>{props.card.cost.map( (element, index) => { return <li key={index}>{element}</li>})}</div>
        </div>
    );
};

export default Card;
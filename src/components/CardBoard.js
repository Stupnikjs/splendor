import React from 'react';
import Card from './Card';



const CardBoard = (props) => {
    
    return (
        <div className='cardBoard'>
            {props.cards.map( (elmt, index) => {
              return <Card key={index} id={index +1} getCard={props.getCard} card={elmt}></Card>
                    })}
             
        </div>
    );
};

export default CardBoard;
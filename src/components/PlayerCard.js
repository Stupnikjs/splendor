import React from 'react';

const PlayerCard = (props) => {
    return (
       <div className={'playerCard' + ' ' + props.card.color} >
        <span>{props.card.point}</span>
       </div> 
    );
};

export default PlayerCard;
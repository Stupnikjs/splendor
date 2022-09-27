import React from 'react';

const PlayerCard = (props) => {
    return (
       <div className='playerCard'>
        <li className={props.color}></li><span>{props.player[1].filter(element => element.color === props.color ).length}</span>
       </div> 
    );
};

export default PlayerCard;
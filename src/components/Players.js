import React from 'react';
import Player from './Player';



const Players = (props) => {
    return (
        <div className='players'>
            {props.players.map((element, index) => {
                return <Player key={index} player={element}></Player>}
            )}
           
        </div>
    );
};

export default Players;
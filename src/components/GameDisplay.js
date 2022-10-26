
import React from 'react';
import Timer from './Timer';


const GameDisplay = (props) => {
    return (
        <div className='gameDisplay'>
             <div className="playerStatus">
                {props.players[0][3] ? <p id={"player" + props.players[0][0]}> Player 1 playing ...... </p>: <p id={"player" + props.players[1][0]}> Player 2 playing ...... </p> }
               
             </div>
             <Timer></Timer>
        
        </div>
    );
};

export default GameDisplay;
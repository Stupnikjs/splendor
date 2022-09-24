import React from 'react';

const Player = (props) => {
    return (
        <div className='player' id='player1'>
            Player {props.player[0]}
            <div className='playerCards'>
            <div className='ul'> 
            </div>
            </div>
            <div className="playerTokens">
            </div>
        </div>
    );
};

export default Player;
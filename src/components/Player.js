import React from 'react';

/*  Player {props.player[0]}
            */

const Player = (props) => {
    
    return (
        <div className='player'>
            <h2> Player {props.player[0]}</h2>
           <div className='playerCards'>
            <div className='ul'> 
            
            </div>
            </div>
            <div className="playerTokens">
            {props.player[2]}
            </div>
        </div>
    );
};

export default Player;
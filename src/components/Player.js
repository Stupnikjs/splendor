import React from 'react';

/*  Player {props.player[0]}
            */

const Player = (props) => {
    
    return (
        <div className='player'>
            <h2> Player {props.player[0]}</h2>
           <div className='playerCards'>
            <div className='ul'> 
                <li className='blue'>{props.player[1].filter(element => element.color === "blue" ).length}</li>
                <li className='red'>{props.player[1].filter(element => element.color === "red" ).length}</li>
                <li className='green'>{props.player[1].filter(element => element.color === "green" ).length}</li>
                <li className='black'>{props.player[1].filter(element => element.color === "black" ).length}</li>
                <li className='white'>{props.player[1].filter(element => element.color === "white" ).length}</li>
            </div>
            </div>
            <div className="playerTokens">
              {}
            </div>
        </div>
    );
};

export default Player;
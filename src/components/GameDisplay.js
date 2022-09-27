import React from 'react';

// {props.players.filter(element => element[3])[0]}

const GameDisplay = (props) => {
    return (
        <div className='gameDisplay'>
           <p>Player turn </p>
          <button> Start Game </button> 
        </div>
    );
};

export default GameDisplay;
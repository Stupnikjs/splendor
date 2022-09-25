import React from 'react';


const GameDisplay = (props) => {
    return (
        <div className='gameDisplay'>
          Game {JSON.stringify(props)}
        </div>
    );
};

export default GameDisplay;
import React, { useState, useEffect } from 'react';
import PlayerCard from './PlayerCard';

/*  
            */

const Player = (props) => {
    console.log(JSON.stringify(props))
    const [score, setScore] = useState(0)
    useEffect( () => {
      setScore(props.player[1].reduce((previous, current) => 
        previous + current.point, 0)); 
     
       
    }, [score, props])
    return (
        <div className={'player' + ' ' + 'player' + props.id}>
            <div className='header'>
                <h2> Player {props.player[0]}</h2>
                <h3>Score  
                { score }
                </h3>               
            </div>
        <div className='playerCards'>
           <h4>Cards</h4>
            <div className='listCard'> 
                {props.player[1].map((element, index) => {
                         return <PlayerCard key={index} card={element} player={props.player}></PlayerCard>
                })}
               
               
            </div>
            </div>
           
            <div className="playerTokens">
                <h4>Token</h4>
                <div className='listToken'> 
                    <span><li className='blue'></li><span>{props.player[2][0]}</span></span>
                    <span><li className='red'></li><span>{props.player[2][1]}</span></span>
                    <span><li className='green'></li><span>{props.player[2][2]}</span></span>
                    <span><li className='black'></li><span>{props.player[2][3]}</span></span>
                    <span><li className='white'></li><span>{props.player[2][4]}</span></span>         
            </div>
              {}
            </div>
        </div>
    );
};

export default Player;
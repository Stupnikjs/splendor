import React, { useState, useEffect } from 'react';

/*  
            */

const Player = (props) => {
    
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
            <div className='list'> 
                <p><li className='blue'></li><span>{props.player[1].filter(element => element.color === "blue" ).length}</span></p>
                <p><li className='red'></li><span>{props.player[1].filter(element => element.color === "red" ).length}</span></p>
                <p><li className='green'></li><span>{props.player[1].filter(element => element.color === "green" ).length}</span></p>
                <p><li className='black'></li><span>{props.player[1].filter(element => element.color === "black" ).length}</span></p>
                <p><li className='white'></li><span>{props.player[1].filter(element => element.color === "white" ).length}</span></p>
            </div>
            </div>
           
            <div className="playerTokens">
                <h4>Token</h4>
                <div className='list'> 
                    <p><li className='blue'></li><span>{props.player[2][0]}</span></p>
                    <p><li className='red'></li><span>{props.player[2][1]}</span></p>
                    <p><li className='green'></li><span>{props.player[2][2]}</span></p>
                    <p><li className='black'></li><span>{props.player[2][3]}</span></p>
                    <p><li className='white'></li><span>{props.player[2][4]}</span></p>
            </div>
              {}
            </div>
        </div>
    );
};

export default Player;
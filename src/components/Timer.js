import React, { useEffect, useState } from 'react';

const Timer = () => {
    
    const [timer,setTimer]= useState(0)

    useEffect(() => {
        setInterval( ()=> {
            setTimer( timer => timer += .5)  // pourquoi .5 et pas 1
        }, 1000)

    }, [])

    
    return (
        <div className='timer'>
            temps écoulé : 
            {timer}
        </div>
    );
};

export default Timer;
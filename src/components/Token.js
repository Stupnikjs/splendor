import React from 'react';

const Token = (props) => {
    return (
        <div className='token'>
            <p className={'colorPoint' + ' '+ props.color }></p>
            <input type="checkbox"></input>
        </div>
    );
};

export default Token;
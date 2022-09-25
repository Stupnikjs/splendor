import React, { useState } from 'react';

const Token = (props) => {
    const [checked, setChecked] = useState(false)
    return (
        <div className='token' >
            <p className={'colorPoint' + ' '+ props.color }></p>
            <input type="checkbox" id={props.id} onClick={(e) => {props.checkInput(e); props.modifyBankState(e)}}></input>
        </div>
    );
};

export default Token;
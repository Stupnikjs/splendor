import React, { useEffect, useState } from 'react';
import CheckBox from './CheckBox';

const Token = (props) => {
    

    useEffect(() => {
        
    }, [props])

    return (
        <div className='token' >
            {props.count}
            <p className={'colorPoint' + ' '+ props.color }></p>
            <CheckBox id={props.id} count={props.count} checked={props.checked} modifyBankState={props.modifyBankState} ></CheckBox>      
        </div>
    );
};

export default Token;
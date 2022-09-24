import React from 'react';
import { returnColor } from '../function/functions';
import Token from './Token';

const Bank = (props) => {
    return (
        <div className='bank'>
            {props.bank.map((element, index) => {
                return <Token color={returnColor(index)} count={element}></Token>
            })}
        </div>
    );
};

export default Bank;
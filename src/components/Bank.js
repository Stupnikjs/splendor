import React, { useEffect, useState } from 'react';
import { returnColor } from '../function/functions';
import Token from './Token';



const Bank = (props) => {
    
    const [bankState, setBankState] = useState([false, false, false, false, false])
    const modifyBankState = function(e){
        if (e.currentTarget.checked) setBankState(bankState.map( (element, index) => {
            if (index === parseInt(e.currentTarget.getAttribute('id'))) return true 
            else return element
        }))
    }



    useEffect(() => {
            if(bankState.filter((element) => element === true).length === 3){ props.setBank(bankState.map((element,index)=> {
                if (element) return props.bank[index] - 1
                else return props.bank[index]
                
            }))
            setBankState([false, false, false, false, false])}


    },[bankState, props])
    return (
        <div className='bank'>
            {props.bank.map((element, index) => {
                return <Token id={index} color={returnColor(index)} modifyBankState={modifyBankState} checkInput={props.checkInput} count={element}></Token>
            })}
        </div>
    );
};

export default Bank;
import React, { useEffect, useState } from 'react';
import { addTwoArray, getRandomVal, returnColor, canPlayerBuyCards } from '../function/functions';
import Token from './Token';



const Bank = (props) => {
    
    const [bankState, setBankState] = useState([false, false, false, false, false])
    const [checkedCount, setCheckedCount] = useState(0)
    

    const modifyBankState = function(e){
        if (e.currentTarget.checked) setBankState(bankState.map( (element, index) => {
            if (index === parseInt(e.currentTarget.getAttribute('id'))) return true 
            else return element
        }))
    }



    useEffect(() => {
            console.log(canPlayerBuyCards(props.cards, props.players[1]))
           
            if(bankState.filter((element) => element === true).length === 3){ 
                // player 1 
                
                if (props.players[0][3] || !props.players[1][3]){
                    props.setBank(bankState.map((element,index)=> {
                        if (element) return props.bank[index] - 1
                        else return props.bank[index]})); 
                    let token = bankState.map((element, index) => {
                        if (element) return props.players[0][2][index] + 1
                        else return props.players[0][2][index] 
                    })
                
                
                    props.dispatch({type:"token player1", token:token})
                    setBankState([false, false, false, false, false]); 
                    props.dispatch({type:"next"})
                     
            }   //player 2
                else {props.setBank(bankState.map((element,index)=> {
               
                if (element) return props.bank[index] - 1
                else return props.bank[index]})); 
                let token = bankState.map((element, index) => {
                if (element) return props.players[1][2][index] + 1
                else return props.players[1][2][index] 
            })
            
            props.dispatch({type:"token player2", token:token})
            setBankState([false, false, false, false, false]); 
            props.dispatch({type:"next"})
            
        }
        }

    },[bankState, props])
    return (
        <div className='bank'>
            {props.bank.map((element, index) => {
                return <Token 
                id={index} 

                color={returnColor(index)} 
                modifyBankState={modifyBankState}
                
                checked={bankState[index]} 
                count={element}


                ></Token>
            })}
            
        </div>
    );
};

export default Bank;
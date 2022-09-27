import React, { useEffect, useReducer } from 'react';
import {  generateCard, generateCardsArray, checkCost, getCardsCount, addTwoArray } from '../function/functions';
import CardBoard from './CardBoard';
import GameDisplay from './GameDisplay';
import Bank from './Bank';
import Player from './Player';
import { useState } from 'react';

// create n players 
function callPlayers(n){
var players = []
for (var i = 0; i < n ; i++){
    var player = [i+1 , [], [0, 0, 0, 0, 0], false]
    players.push(player)
}
 return players
}

// push card in player array [1]
const pushCard = function(element, index, card){
        switch(index){
            case 0: return element; 
            case 1: return [...element, card]
            case 2: return element; 
            case 3: return element; 
            default: return element
        }
}




// useReducer 

const reducer = (state, action) => {
    switch (action.type){

        // ajust for multiplayer

        case "card player1" : return [state[0].map(
          (element, index) => pushCard(element, index, action.card) 
        ), state[1]]

        case "card player2" : return [state[0], state[1].map(
            (element, index) => pushCard(element, index, action.card))]

        case "token player1" : return [state[0].map((element,index) => {
                if (index === 2){ return action.token} 
                else return element
        }), state[1]]
        case "token player2" : return [state[0]
         , state[1].map((element,index) => {
            if (index === 2){ return action.token} 
            else return element
    })]
      
        case "start" : return [[state[0][0], state[0][1], state[0][2], true], state[1]]

        case "next" : return [[state[0][0], state[0][1], state[0][2], !state[0][3]], [state[1][0], state[1][1], state[1][2], !state[1][3]] ]
        default: return new Error()
    }
    }


const Board = () => {

    const [cards , setCards] = useState(generateCardsArray(12))       // cards array of object representing cards 
    const [players, dispatch] = useReducer(reducer, callPlayers(2))   // player array representing player [index, [cards], [token], turn]
    const [bank, setBank] = useState([4,4,4,4,4])                     // array of token in bank [blue, red, green, black, white]
    

    // get the card in players card collection who clicked on it 
    
    
    const getCard = function(e){ 

        var index = parseInt(e.currentTarget.getAttribute("id")); 
        var playerCard = cards[index-1]
        
        if (players[0][3] && !players[1][3] && checkCost(playerCard.cost, players[0])) {
        console.log("achat carte")
        setCards(cards.map( element => {
            if (element === cards[index-1]) return generateCard(index-1)
            else return element; 
          })) 
       
        dispatch({type : "card player1", card : playerCard}); 
        setBank(players[0][2].map((element, index) => {
           return bank[index] + element
        }))
   
        dispatch({type:"next"})
    }
        else if (!players[0][3] && players[1][3] && checkCost(playerCard.cost, players[1])) {
            var index = e.currentTarget.getAttribute("id"); 
            var playerCard = cards[index-1]
           
            setCards(cards.map( element => {
                if (element === cards[index-1]) return generateCard(parseInt(index-1))
                else return element; 
              })) 
           
           dispatch({type : "card player2", card : playerCard})
           dispatch({type:"next"})
        }
        console.log(players)
       }


    useEffect(() => {
        dispatch({type:"start"})
       
        
    }, [])
    return (
        <div className='board'>
            <GameDisplay players={players}></GameDisplay>
            <CardBoard cards={cards}  getCard={getCard}></CardBoard>
            <Bank bank={bank} setBank={setBank} players={players}  dispatch={dispatch} ></Bank>
            {players.map((element, index) => {
                return <Player id={index+1} key={index} player={element}></Player>
            })}       
        </div>
    );
};

export default Board;
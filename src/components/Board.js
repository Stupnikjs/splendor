import React, { useReducer } from 'react';
import {  generateCard, generateCardsArray } from '../function/functions';
import CardBoard from './CardBoard';
import GameDisplay from './GameDisplay';
import Bank from './Bank';
import Player from './Player';
import { useState } from 'react';


function callPlayers(n){
var players = []
for (var i = 0; i < n ; i++){
    var player = [i+1 , [], [], false]
    players.push(player)
}
 return players
}
const pushCard = function(element, index, card){
        switch(index){
            case 0: return element; 
            case 1: return [...element, card]
            case 2: return element; 
            case 3: return element; 
            default: return element
        }
}
const pushToken = function(element, index, token){
        switch(index){
            case 0: return element; 
            case 1: return element; 
            case 2: return [...element, token]; 
            case 3: return element; 
            default: return element
        }
}

const reducer = (state, action) => {
    switch (action.type){
        case "card" : return [state[0].map(
          (element, index) => pushCard(element, index, action.card) 
        ), state[1]]
        case "token" : return [state[0].map(
            (element, index) => pushToken(element, index, action.token) 
          ), state[1]]
        
        default: return new Error()
    }
    }
const checkInput = function(e){
    console.log(e.currentTarget.id)
}

const Board = () => {

    const [cards , setCards] = useState(generateCardsArray(12)) 
    const [players, dispatch] = useReducer(reducer, callPlayers(2))
    const [bank, setBank] = useState([4,4,4,4,4])
    const getCard = function(e){   
        var index = e.currentTarget.getAttribute("id"); 
        var playerCard = cards[index-1]
        setCards(cards.map( element => {
            if (element === cards[index-1]) return generateCard(parseInt(index-1))
            else return element; 
          }))  
        try{ dispatch({type : "card", card : playerCard}); console.log(players)}
        catch(err){console.log(err)}
       }
    
    return (
        <div className='board'>
            <GameDisplay></GameDisplay>
            <CardBoard cards={cards}  getCard={getCard}></CardBoard>
            <Bank bank={bank} checkInput={checkInput}></Bank>
            {players.map((element, index) => {
                return <Player key={index} player={element}></Player>
            })}       
        </div>
    );
};

export default Board;
import React, { startTransition, useEffect, useReducer } from 'react';
import { getRandomVal,returnCount, returnColor, generateCard, generateCardsArray } from '../function/functions';
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

const reducer = (state, action) => {
    switch (action.type){
        case "card" : return [state[0].map((element,index) => {
            switch(index){
                case 0: return element; 
                case 1: return [...element, action.card]
                case 2: return element; 
                case 3: return element; 
                default: return element
            }
            
        }), state[1]]
        
        default: return new Error()
    }
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
    
    console.log(players)
    return (
        <div className='board'>
            <GameDisplay></GameDisplay>
            <CardBoard cards={cards}  getCard={getCard}></CardBoard>
            <Bank bank={bank}></Bank>
            {players.map((element, index) => {
                return <Player key={index} player={element}></Player>
            })}       
        </div>
    );
};

export default Board;
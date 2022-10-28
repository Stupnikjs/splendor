import React, { createContext, useEffect, useReducer } from 'react';
import {  generateCard, generateCardsArray, checkCost, getCardsCount, addTwoArray, canPlayerBuyCards } from '../function/functions';
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
    
    const getIndex = function(e){
        console.log(e.currentTarget.getAttribute('id'))
        console.log(players[1][3])
    }


    const getCard = function(e){ 

        var index = parseInt(e.currentTarget.getAttribute("id")); 
        
        // carte cliqué 
        var playerCard = cards[index-1]
 
        // player 1 turn et assez d'argent 
        if (players[0][3] && !players[1][3] && checkCost(playerCard.cost, players[0])) {
        
        var cardMoney = [0, 0, 0, 0, 0] 

        players[0][1].map((element) => {
            switch(element.color){
                case "blue": cardMoney[0] += 1 ; return  
                case "red": cardMoney[1] += 1 ; return  
                case "green": cardMoney[2] += 1 ; return  
                case "black": cardMoney[3] += 1 ; return  
                case "white": cardMoney[4] += 1 ; return  
            } 
        })

        // generation d'un nouvelle carte 
        setCards(cards.map( element => {
            if (element === cards[index-1]) return generateCard(index-1)
            else return element; 
          })) 

        // ajout de la carte dans les cartes du joueur 
        dispatch({type : "card player1", card : playerCard}); 
        
        // payement a la bank en token 
        setBank(bank.map((element, index) => {
            var tokenToRemove = playerCard.cost[index] - cardMoney[index]
            if(cardMoney[index] >=  playerCard.cost[index]) return element 
            else return element + tokenToRemove 
        }))

        // mise a jour des tokens du joueur 
        var newToken = players[0][2].map((element, index) =>{ 
            if (playerCard.cost[index] >= cardMoney[index]) return element - (playerCard.cost[index] - cardMoney[index]) 
            else return element
        })
        
        dispatch({type:"token player1", token:newToken})
        
        dispatch({type:"next"})
    }

    // player 2 turn 

    if (players[1][3] && !players[0][3] && checkCost(playerCard.cost, players[1])) {
    var cardMoney = [0, 0, 0, 0, 0] 

    players[1][1].map((element) => {
        switch(element.color){
            case "blue": cardMoney[0] += 1 ; return  
            case "red": cardMoney[1] += 1 ; return  
            case "green": cardMoney[2] += 1 ; return  
            case "black": cardMoney[3] += 1 ; return  
            case "white": cardMoney[4] += 1 ; return  
        } 
    })

    // generation d'un nouvelle carte 
    setCards(cards.map( element => {
        if (element === cards[index-1]) return generateCard(index-1)
        else return element; 
      })) 

    // ajout de la carte dans les cartes du joueur 
    dispatch({type : "card player2", card : playerCard}); 
    
    // payement a la bank en token 
    setBank(bank.map((element, index) => {
        var tokenToRemove = playerCard.cost[index] - cardMoney[index]
        if(cardMoney[index] >=  playerCard.cost[index]) return element 
        else return element + tokenToRemove 
    }))

    // mise a jour des tokens du joueur 
    var newToken = players[1][2].map((element, index) =>{ 
        if (playerCard.cost[index] >= cardMoney[index]) return element - (playerCard.cost[index] - cardMoney[index]) 
        else return element
    })
    
    dispatch({type:"token player2", token:newToken})
    
    dispatch({type:"next"})
}

}




    useEffect(() => {
        dispatch({type:"start"})
       
        
    }, [])

    useEffect(() => {
        // automatisation 
       // if (players[1][3]) getCardPlayer2()
       
    }, [players])
    return (
        <div className='board'>
            <GameDisplay players={players}></GameDisplay>
            <CardBoard cards={cards}  getCard={getCard} getIndex={getIndex}></CardBoard>
            <Bank bank={bank} setBank={setBank} players={players} cards={cards} dispatch={dispatch} ></Bank>
            {players.map((element, index) => {
                return <Player id={index+1} key={index} player={element}></Player>
            })}       
        </div>
    );
};

export default Board;
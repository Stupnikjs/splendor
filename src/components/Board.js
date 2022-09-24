import React from 'react';
import { getRandomVal,returnCount, returnColor, generateCard, generateCardsArray } from '../function/functions';
import CardBoard from './CardBoard';
import Token from './Token';
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
/*

*/
const Board = () => {

    const [cards , setCards] = useState(generateCardsArray(12)) 
    const [players, setPlayers] = useState(callPlayers(2))
    const [bank, setBank] = useState([4,4,4,4,4])
    const getCard = function(e){   
        var index = e.currentTarget.getAttribute("id"); 
        setCards(cards.map( element => {
            if (element === cards[index-1]) return generateCard(parseInt(index-1))
            else return element; 
          }))
       }

    return (
        <div className='board'>
            <CardBoard cards={cards}  getCard={getCard}></CardBoard>
            <Bank bank={bank}></Bank>
            <Player player={players[0]}></Player>
            <Player player={players[1]}></Player>
        
        </div>
    );
};

export default Board;
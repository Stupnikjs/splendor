import React, {  } from 'react';


const Home = () => {

   
    return (
        <div className='home'>
            
            <h1> le Splendor </h1>
            <h2>Régles du jeu</h2>
            <ul>
                <li>La partie se deroule entre deux Joueurs </li>
                <li> Chaque Tour le joueur a le choix entre prendre 4 pions ou acheter une Carte avec les pions s'il le peut</li>
                <li> Les cartes donnent des points aux Joueurs </li>
                <li> Lorsque un joueur atteint  13 points la partie est gagnée </li>

            </ul>
            <a href="/game">Lancer une partie </a>
        </div>

    );
};

export default Home;
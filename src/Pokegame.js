import React, { Component } from 'react';
import Pokedex, { cards } from './Pokedex';
import './Pokegame.css';

export default class Pokegame extends Component {
  render() {
    var hand1 = [];
    var hand2 = [];
    var hand1exp;
    var hand2exp;
    var isHand1Winner;
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    function removeCard(n, array) {
      array.splice(n, 1);
    }
    function distributer() {
      var fullLength = cards.length;
      for (let i = 0; i < fullLength / 2; i++) {
        let x = getRandomInt(cards.length);
        hand1[i] = cards[x];
        removeCard(x, cards);
      }
      hand2 = cards;
      //   console.log(hand1, hand2);
      hand1exp = calculateExp(hand1);
      hand2exp = calculateExp(hand2);
      isHand1Winner = hand1exp > hand2exp;
    }
    function calculateExp(array) {
      let sum = 0;
      for (let i = 0; i < array.length; i++) {
        sum += array[i].base_experience;
      }
      return sum;
    }
    return (
      <div className="Pokegame">
        {/* <h1 id="heading">Pokedex</h1> */}
        {distributer()}
        <p className={isHand1Winner ? 'green wl' : 'red wl'}>
          {isHand1Winner ? 'Winning' : 'Losing'} Hand
        </p>
        <p className="score"> Total Experince : {hand1exp}</p>
        <Pokedex hand={hand1} />
        <p className={isHand1Winner ? 'red wl' : 'green wl'}>
          {isHand1Winner ? 'Losing' : 'Winning'} Hand
        </p>
        <p className="score"> Total Experince : {hand2exp}</p>
        <Pokedex hand={hand2} />
      </div>
    );
  }
}

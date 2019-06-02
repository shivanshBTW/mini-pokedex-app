import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import './Pokecard.css';
export default class Pokecard extends Component {
  render() {
    function pad(n, width, z) {
      z = z || '0';
      n = n + '';
      return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }
    var paddedID = pad(this.props.id, 3);
    return (
      <div className="Pokecard">
        <p className="Pokecard-name">{this.props.name}</p>
        <img
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedID}.png`}
          alt=""
          className="Pokecard-images"
        />
        <p>Type: {this.props.type}</p>
        <p>EXP: {this.props.exp}</p>
      </div>
    );
  }
}

import PropTypes from 'prop-types';
import React from 'react';
import GameHeader from '../components/GameHeader';
import Questions from '../components/Questions';
import './Game.css';

export default function Game() {
  return (
    <div className="game">
      <GameHeader />
      <Questions />
    </div>);
}

Game.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

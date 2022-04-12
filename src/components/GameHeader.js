import React from 'react';
import { useSelector } from 'react-redux';
import './GameHeader.css';

export default function GameHeader() {
  const { name, score, gravatarImage } = useSelector((state) => state.player);
  return (
    <div className="header-game">
      <img
        className="imagem-game"
        data-testid="header-profile-picture"
        src={ gravatarImage }
        alt="user"
      />

      <span
        className="span-header"
        data-testid="header-player-name"
      >
        {'Jogador: '}
        {name}
      </span>

      <span>{'Pontos: '}</span>

      <span
        className="span-header"
        data-testid="header-score"
      >
        {' '}
        {score}
      </span>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import './Ranking.css';

export default function Ranking() {
  const ranking = JSON.parse(localStorage.ranking);
  return (
    <div className="ranking">
      <div className="container-ranking">
        <h1 data-testid="ranking-title">Ranking</h1>
        {
          ranking.sort((a, b) => b.score - a.score)
            .map((item, index) => (
              <div key={ index } className="ranking-jogador">
                <img src={ item.picture } alt="player" className="img-ranking" />
                <span data-testid={ `player-name-${index}` }>
                  {item.name}
                </span>
                <span>- Pontos:</span>
                <span data-testid={ `player-score-${index}` }>
                  {item.score}
                </span>
              </div>
            ))
        }
        <Link to="/">
          <button
            className="button-ranking"
            type="button"
            data-testid="btn-go-home"
          >
            Jogar novamente
          </button>
        </Link>
      </div>
    </div>
  );
}

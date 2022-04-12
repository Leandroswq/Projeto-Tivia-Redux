import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import GameHeader from '../components/GameHeader';
import './FeedBack.css';

export default function Feedback() {
  const { assertions, score } = useSelector((state) => state.player);

  const magicNumber3 = 3;
  return (
    <div className="feedback">
      <GameHeader />
      <h2 data-testid="feedback-text">
        {assertions >= magicNumber3
          ? 'Well Done!' : 'Could be better...'}
      </h2>
      <section>
        <h3>
          Placar final:
          {' '}
          <span data-testid="feedback-total-score">{Number(score)}</span>
          {' '}
          pontos
        </h3>
        <h3>
          Total de perguntas corretas:
          {' '}
          <span data-testid="feedback-total-question">{assertions}</span>
          {' '}
        </h3>
      </section>
      <section />

      <Link
        to="/ranking"
      >
        <button
          className="button-feedback"
          type="button"
          data-testid="btn-ranking"
        >
          Ranking
        </button>
      </Link>

      <Link
        to="/"
      >
        <button
          className="button-feedback"
          type="button"
          id="button-play-again"
          data-testid="btn-play-again"
        >
          Play Again
        </button>
      </Link>

    </div>
  );
}

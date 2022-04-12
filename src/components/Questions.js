import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import {
  actionAnswers,
  actionClearAnswers,
  actionClearQuestion,
  actionClearScore,
  actionSetTimerId,
  actionTimerRuning,
  getQuestion,
  getToken,
} from '../Redux/actions';
import ButtonAnswers from './ButtonAnswers';
import './Questions.css';
import Timer from './Timer';

export default function Questions() {
  const dispatch = useDispatch();
  const questionsReducer = useSelector((state) => state.questions.questions);
  const { score, name, gravatarImage } = useSelector((state) => state.player);

  const [questionsClassName, setQuestionsClassName] = useState(null);
  const { token } = useSelector((state) => state);
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState({});
  const [position, setPosition] = useState(0);
  const [hasClick, setHasClick] = useState(false);

  useEffect(() => { // Efeito similar ao ComponentDidMount
    dispatch(actionClearScore());
    dispatch(getQuestion());
  }, [dispatch]);

  useEffect(() => {
    const magicNumber = 3; // verifica se o token está valido
    if (questionsReducer.response_code === magicNumber) {
      dispatch(getToken());
    } else {
      setQuestions(questionsReducer.results);
    }
  }, [questionsReducer, dispatch, token]);

  useEffect(() => {
    if (questions) {
      setPosition(1);
      setQuestion(questions[0]);
    }
  }, [questions]);

  const magicNumber5 = 5;
  function saveLocalStorage() {
    if (localStorage.ranking) {
      const aux = JSON.parse(localStorage.ranking);
      aux.push({ name, score, picture: gravatarImage });
      localStorage.ranking = JSON.stringify(aux);
    } else {
      localStorage.ranking = JSON.stringify([{ name, score, picture: gravatarImage }]);
    }
  }
  function nextQuestion() {
    setQuestion(questions[position]);
    setPosition(position + 1);
    setHasClick(false);
    dispatch(actionTimerRuning(true));
    dispatch(actionSetTimerId(undefined));
    if (hasClick && position === magicNumber5) {
      saveLocalStorage();
      dispatch(actionClearAnswers());
      dispatch(actionClearQuestion());
    }
  }

  useEffect(() => {
    if (question && question.category) {
      dispatch(actionAnswers([...question.incorrect_answers,
        question.correct_answer], question.correct_answer));
      setQuestionsClassName('questions');
    }
  }, [question, dispatch]);

  return (
    <div className={ questionsClassName }>
      {question && question.category && (
        <>
          <h4
            data-testid="question-category"
            className="questions__category"
          >
            {question.category}
          </h4>
          <p
            data-testid="question-text"
            className="questions__question"
          >
            {question.question}
          </p>
          <Timer />
          <ButtonAnswers difficulty={ question.difficulty } setHasClick={ setHasClick } />
        </>
      )}

      {
        (hasClick && position < magicNumber5) && (
          <button
            type="button"
            data-testid="btn-next"
            onClick={ nextQuestion }
            className="questions__next-question"
          >
            Next Question
          </button>
        )
      }
      {
        (hasClick && position === magicNumber5) && (
          <Link
            to="/feedback"
            onClick={ nextQuestion }
          >
            <button
              type="button"
              data-testid="btn-next"
              className="questions__next-question"
            >
              Next Question
            </button>
          </Link>
        )
      }
    </div>
  );
}

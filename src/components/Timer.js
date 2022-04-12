import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionDisabledAnswers, actionSetTimerId, actionTimer } from '../Redux/actions';
import './Timer.css';

export default function Timer() {
  const { time, timerId } = useSelector((state) => state.timer); // userSelector puxa a informação do estado global
  const [className, setClassName] = useState('timer');
  const dispatch = useDispatch();
  useEffect(() => {
    if (timerId === undefined) { // evita multiplos setInterval
      const second = 1000;
      const interval = setInterval(() => {
        dispatch(actionTimer());
      }, second);
      dispatch(actionSetTimerId(interval));
    }
  }, [timerId, dispatch]);

  useEffect(() => {
    if (time < 1) {
      clearInterval(timerId);
    }
  }, [time, timerId]);

  useEffect(() => {
    const magicNumber5 = 5;
    if (time === 0) {
      dispatch(actionDisabledAnswers(true));
    }
    if (time === magicNumber5 && !/pulse/.test(className)) {
      setClassName(`${className} pulse`);
    }
  }, [time, dispatch, setClassName, className]);
  return (
    <span className={ className }>
      {time}
    </span>);
}

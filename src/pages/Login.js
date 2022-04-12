import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { actionGravatarImage, actionPlayer, getToken } from '../Redux/actions';
import './Login.css';

export default function Login(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isDisable, setIsDisable] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (name.length > 0 && email.length > 0) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [name, email]);
  async function handleBtnPlay() {
    dispatch(getToken());
    dispatch(actionPlayer({ name, email }));
    dispatch(actionGravatarImage(email));
    const { history: { push } } = props;
    push('/game');
  }

  function handleBtnSettings() {
    const { history: { push } } = props;
    push('/settings');
  }

  return (
    <div className="login">
      <form className="form-login">
        <label htmlFor="login-name">
          <input
            className="input-login"
            data-testid="input-player-name"
            id="login-name"
            name="name"
            value={ name }
            onChange={ ({ target }) => { setName(target.value); } }
            placeholder="Name"
          />
        </label>

        <label htmlFor="login-email">
          <input
            className="input-login"
            data-testid="input-gravatar-email"
            id="login-email"
            name="email"
            value={ email }
            onChange={ ({ target }) => { setEmail(target.value); } }
            placeholder="E-mail"
          />
        </label>

        <button
          className="btn-login"
          data-testid="btn-play"
          disabled={ isDisable }
          type="button"
          onClick={ handleBtnPlay }
        >
          Play
        </button>

        <button
          className="btn-settings"
          data-testid="btn-settings"
          type="button"
          onClick={ handleBtnSettings }
        >
          Settings
        </button>
      </form>
    </div>);
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

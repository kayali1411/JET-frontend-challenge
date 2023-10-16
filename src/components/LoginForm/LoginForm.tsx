import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import gameAPI from '../../lib/game-api';
import { useAppSelector } from '../../lib/redux';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { HOME_ROUTE } from '../../config/routes';

const LoginForm = () => {
  const isLoggedin = useAppSelector((state) => state.player.isLoggedin);
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setError('');
    event.preventDefault();
    // TODO: validate if username is registered
    if (!username || username.trim().length === 0) {
      setError('Username is required!');
    }
    gameAPI.login(username);
  };

  useEffect(() => {
    if (isLoggedin) {
      navigate(HOME_ROUTE);
    }
  }, [isLoggedin]);

  return (
    <div className="w-full relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg drop-shadow-md flex flex-col space-y-4 items-center">
        <div className="p-2 bg-primray rounded-full w-min">
          <Logo />
        </div>
        <h2>Please enter a username to login</h2>
        <form
          className="flex flex-col w-full space-y-3"
          onSubmit={handleSubmit}
        >
          <input
            className={`p-2 rounded-md border-2 ${
              error ? 'border-red-500' : 'border-zinc-300'
            }`}
            type="text"
            id="username"
            placeholder="username"
            value={username}
            onChange={handleChange}
          />
          {error && <span className="text-red-500">{error}</span>}
          <button
            className="bg-primray p-2 text-white rounded-md cursor-pointer"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

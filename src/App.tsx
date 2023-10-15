import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomeScreen } from './screens/Home';
import { LoginScreen } from './screens/Login';
import { NotFoundScreen } from './screens/NotFound';
import gameAPI from './lib/game-api';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeScreen />,
    },
    {
      path: '/login',
      element: <LoginScreen />,
    },
    {
      path: '*',
      element: <NotFoundScreen />,
    },
  ]);

  useEffect(() => {
    gameAPI.initialize();
  }, []);

  return <RouterProvider router={router} />;
};

export default App;

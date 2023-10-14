import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomeScreen } from './screens/Home';
import { LoginScreen } from './screens/Login';
import { NotFoundScreen } from './screens/NotFound';

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

  return <RouterProvider router={router} />;
};

export default App;

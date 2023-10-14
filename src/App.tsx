import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <div>Home Screen</div>,
    },
    {
      path: '/login',
      element: <div>Login Screen</div>,
    },
    {
      path: '*',
      element: <div>Not Found Screen</div>,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;

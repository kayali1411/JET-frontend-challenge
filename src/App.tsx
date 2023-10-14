import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/Layout';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Layout>
          <div>
            <h1>Home Screen</h1>
          </div>
        </Layout>
      ),
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

import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { HOME_ROUTE } from '../../config/routes';

const NotFoundScreen = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(HOME_ROUTE);
  };

  return (
    <Layout>
      <div className="w-full relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col space-y-4 items-center">
          <h1 className="text-5xl text-info font-bold">404 - Page Not Found</h1>
          <p className="text-info text-xl pb-4">
            The page you are looking for does not exist.
          </p>
          <button
            type="button"
            onClick={handleClick}
            className="bg-primray text-white rounded-full w-52 p-4 font-bold cursor-pointer shadow-md"
          >
            Back home
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundScreen;

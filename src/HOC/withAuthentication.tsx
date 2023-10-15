import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../lib/redux';
import { LOGIN_ROUTE } from '../config/routes';

// TODO move it to helpers or utils
function getDisplayName(WrappedComponent: React.ComponentType) {
  return (
    WrappedComponent.displayName ||
    WrappedComponent.name ||
    'PrivateScreenComponent'
  );
}

const withAuthentication = (WrappedComponent: React.ComponentType) => {
  const WithAuth: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const isLoggedin = useAppSelector((state) => state.player.isLoggedin);
    const navigate = useNavigate();

    useEffect(() => {
      if (!isLoggedin) {
        // navigate can not be used before the component is mounted
        navigate(LOGIN_ROUTE);
      }
      setLoading(false);
    }, [isLoggedin]);

    return loading ? null : <WrappedComponent />;
  };

  // Set a display name for the HOC
  WithAuth.displayName = `WithAuthentication(${getDisplayName(
    WrappedComponent,
  )})`;

  return WithAuth;
};

export default withAuthentication;

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../lib/redux';
import { LOGIN_ROUTE } from '../config/routes';

// TODO move it to helpers or utils
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getDisplayName(WrappedComponent: React.ComponentType<any>) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

const withAuthentication = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
) => {
  const WithAuth: React.FC<P> = (props) => {
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

    return loading ? null : <WrappedComponent {...props} />;
  };

  // Set a display name for the HOC
  WithAuth.displayName = `WithAuthentication(${getDisplayName(
    WrappedComponent,
  )})`;

  return WithAuth;
};

export default withAuthentication;

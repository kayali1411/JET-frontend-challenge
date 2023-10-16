import Header from './Header';
import Footer from './Footer';
import { ErrorState } from '../ErrorState';

interface IProps extends React.PropsWithChildren {}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen bg-gray">
      <ErrorState />
      <Header />
      <main className="flex flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

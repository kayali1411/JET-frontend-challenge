import Header from './Header';
import Footer from './Footer';

interface IProps extends React.PropsWithChildren {}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

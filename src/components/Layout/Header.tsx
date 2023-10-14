import { ReactComponent as Logo } from '../../assets/logo.svg';

const Header: React.FC = () => {
  return (
    <header className="flex items-center p-4 bg-primray space-x-4 drop-shadow-md">
      <div className="p-2 bg-primrayDark rounded-full">
        <Logo />
      </div>
      <div>
        <h1 className="text-2xl text-white font-bold m-0">Game of Three</h1>
      </div>
    </header>
  );
};

export default Header;

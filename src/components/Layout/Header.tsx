import { ReactComponent as Logo } from '../../assets/logo.svg';
import { useAppSelector } from '../../lib/redux';

const Header: React.FC = () => {
  const selectedRoom = useAppSelector((state) => state.gameStats.room);

  return (
    <header className="flex items-center p-4 bg-primray space-x-4 drop-shadow-md">
      <div className="p-2 bg-primrayDark rounded-full">
        <Logo />
      </div>
      <div>
        {!selectedRoom ? (
          <h1 className="text-2xl text-white font-bold m-0">Game of Three</h1>
        ) : (
          <div className="flex flex-col align-start">
            <h1 className="text-lg text-white font-bold m-0">
              Playing with {selectedRoom.name}
            </h1>
            <span className="text-white">win the game or win job</span>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

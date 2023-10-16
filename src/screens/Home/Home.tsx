import { withAuthentication } from '../../HOC';
import { GameArea } from '../../components/GameArea';
import { Layout } from '../../components/Layout';
import { RoomsListContainer } from '../../components/RoomsTab';

const HomeScreen = () => {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row w-full justify-center px-4 md:space-x-4 space-y-4 md:space-y-0">
        <RoomsListContainer />
        <GameArea />
      </div>
    </Layout>
  );
};

export default withAuthentication(HomeScreen);

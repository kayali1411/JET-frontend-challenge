import { withAuthentication } from '../../HOC';
import { GameArea } from '../../components/GameArea';
import { Layout } from '../../components/Layout';
import { RoomsListContainer } from '../../components/RoomsTab';

const HomeScreen = () => {
  return (
    <Layout>
      <div className="flex w-full justify-center space-x-8">
        <RoomsListContainer />
        <GameArea />
      </div>
    </Layout>
  );
};

export default withAuthentication(HomeScreen);

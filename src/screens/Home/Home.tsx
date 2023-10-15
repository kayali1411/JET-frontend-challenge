import { withAuthentication } from '../../HOC';
import { Layout } from '../../components/Layout';
import { RoomsListContainer } from '../../components/RoomsTab';
import { StartGame } from '../../components/StartGame';

const HomeScreen = () => {
  return (
    <Layout>
      <div className="flex w-full justify-center space-x-8">
        <RoomsListContainer />
        <div className="w-2/5 bg-white p-6 drop-shadow-sm">
          <StartGame />
        </div>
      </div>
    </Layout>
  );
};

export default withAuthentication(HomeScreen);

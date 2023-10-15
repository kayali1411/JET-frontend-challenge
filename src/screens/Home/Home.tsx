import { withAuthentication } from '../../HOC';
import { Layout } from '../../components/Layout';
import { RoomsListContainer } from '../../components/RoomsTab';

const HomeScreen = () => {
  return (
    <Layout>
      <div className="flex w-full justify-center space-x-8">
        <RoomsListContainer />
        <div>game area</div>
      </div>
    </Layout>
  );
};

export default withAuthentication(HomeScreen);

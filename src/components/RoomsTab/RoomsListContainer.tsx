import { useFetchRoomsQuery } from '../../lib/redux/gameApiSlice';
import RoomsList from './RoomsList';

const RoomsListContainer = () => {
  const { data = [], isLoading, isError } = useFetchRoomsQuery();

  return <RoomsList rooms={data} isLoading={isLoading} isError={isError} />;
};

export default RoomsListContainer;

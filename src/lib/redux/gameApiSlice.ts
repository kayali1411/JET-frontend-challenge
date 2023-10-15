import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Room, User } from '../types/gameStats';

// TODO find better name for this slice
export const gameApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3004', // TODO use dotenv
  }),
  endpoints: (builder) => ({
    fetchRooms: builder.query<Room[], void>({
      query: () => '/rooms',
    }),
    fetchUsers: builder.query<User[], void>({
      query: () => '/users',
    }),
  }),
});

export const { useFetchRoomsQuery, useFetchUsersQuery } = gameApiSlice;

export default gameApiSlice;

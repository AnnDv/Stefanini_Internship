import { configureStore } from '@reduxjs/toolkit';
// import apiReducer from './features/apiSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { movieApi } from './sliceApi';

export const middlewares = [movieApi.reducerPath];

const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieApi.middleware),
  // reducer: {
  //   movie: apiReducer,
  // },
});

setupListeners(store.dispatch);

export default store;

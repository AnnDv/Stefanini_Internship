import { configureStore } from '@reduxjs/toolkit';
import PostReducer from './features/apiSlice';

const store = configureStore({
  reducer: {
    movie: PostReducer,
  },
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import scheduleReducer from '../features/schedule/reducer/Schedule';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    schedule: scheduleReducer
  },
});

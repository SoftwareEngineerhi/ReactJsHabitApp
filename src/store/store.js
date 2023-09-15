// store.js
import { configureStore } from '@reduxjs/toolkit';
import habitsReducer from "../reducer/HabitReducer";
// store for redux reducer store state
const store = configureStore({
  reducer: {
    habits: habitsReducer,
  },
});

export default store;

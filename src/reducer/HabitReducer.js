// habitsSlice.js
import { createSlice } from '@reduxjs/toolkit';
// redux toolkit use createSlice for react reducer
const habitsSlice = createSlice({
  name: 'habits',
  initialState: [],
  reducers: {
    addHabit: (state, action) => {
      state.push(action.payload);
    },
    deletehabit:(state,action)=>{
     
         return state.filter((habit,index)=>index!==action.payload);
    },
    toggleStatus: (state, action) => {
      const { habitIndex, dayIndex, status } = action.payload;
      state[habitIndex].statuses[dayIndex] = status;
    },
    toggleImportance: (state, action) => {
      const { habitIndex, importance } = action.payload;
      state[habitIndex].importance = importance;
    },

  },
});
// export all actions for component
export const { addHabit,deletehabit, toggleStatus, toggleImportance } = habitsSlice.actions;
// export reducer for store
export default habitsSlice.reducer;

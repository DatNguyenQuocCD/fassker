import {createSlice} from '@reduxjs/toolkit';
import {getPostsData} from './thunk';

const initialState = {
  data: [],
  loading: false,
  error: [],
};

export const getPostSlice = createSlice({
  name: 'task',
  initialState,
  extraReducers: builder => {
    builder.addCase(getPostsData.pending, (state, action) => {
      console.log('💩: action', action);
      state.loading = true;
    });
    builder.addCase(getPostsData.fulfilled, (state, action) => {
      console.log('💩: action', action);
      state.loading = false;
      console.log('payload => ', action?.payload);
      state.data.push(action?.payload);
    });
    builder.addCase(getPostsData.rejected, (state, action) => {
      console.log('💩: action', action);
      state.loading = false;
    });
  },
});

export const {addTask} = getPostSlice.actions;
export const selectTask = state => state.task;
export default getPostSlice.reducer;
